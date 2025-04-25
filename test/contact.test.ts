import { ContactTest, UserTest } from "./test-util";
import supertest from "supertest";
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";

describe("POST /api/contacts", () => {
  beforeEach(async () => {
    await UserTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should create new contact", async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test123")
      .send({
        first_name: "Dwi",
        last_name: "Narwastu",
        email: "dwinarwastu@mail.com",
        phone: "081000000000",
      });

    logger.debug(response.body);
    expect(response.status).toBe(201);
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.first_name).toBe("Dwi");
    expect(response.body.data.last_name).toBe("Narwastu");
    expect(response.body.data.email).toBe("dwinarwastu@mail.com");
    expect(response.body.data.phone).toBe("081000000000");
  });

  it("should reject create new contact if data is invalid", async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test123")
      .send({
        first_name: "",
        last_name: "",
        email: "dwinarwastumail.com",
        phone: "081000000000000000000000000000000000000000000",
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});

describe("GET /api/contacts/:contactId", () => {
  beforeEach(async () => {
    await UserTest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should be able get contact", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .get(`/api/contacts/${contact.id}`)
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.first_name).toBe("test");
    expect(response.body.data.last_name).toBe("test");
    expect(response.body.data.email).toBe("test@mail.com");
    expect(response.body.data.phone).toBe("081000000000");
  });

  it("should reject get contact if contact is not found", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .get(`/api/contacts/${contact.id + 1}`)
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});

describe("PUT /api/contacts/:contactId", () => {
  beforeEach(async () => {
    await UserTest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should be able to update contact", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}`)
      .set("X-API-TOKEN", "test123")
      .send({
        first_name: "Dwi",
        last_name: "Narwastu",
        email: "dwinarwastu@mail.com",
        phone: "081000000000",
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe(contact.id);
    expect(response.body.data.first_name).toBe("Dwi");
    expect(response.body.data.last_name).toBe("Narwastu");
    expect(response.body.data.email).toBe("dwinarwastu@mail.com");
    expect(response.body.data.phone).toBe("081000000000");
  });

  it("should reject update contact if request is invalid", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}`)
      .set("X-API-TOKEN", "test123")
      .send({
        first_name: "",
        last_name: "",
        email: "dwinarwastumail.com",
        phone: "081000000000000000000000000000000000000000000",
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});

describe("DELETE /api/contacts/:contactId", () => {
  beforeEach(async () => {
    await UserTest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should be able to remove contact", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id}`)
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data).toBe("Success");
  });

  it("should reject remove contact if contact is not found", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id + 1}`)
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});

describe("GET /api/contacts", () => {
  beforeEach(async () => {
    await UserTest.create();
    await ContactTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should be able to search contact", async () => {
    const response = await supertest(web)
      .get("/api/contacts")
      .query({
        name: "test",
      })
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(10);
  });

  it("should be able to search contact using email", async () => {
    const response = await supertest(web)
      .get("/api/contacts")
      .query({
        email: ".com",
      })
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(10);
  });

  it("should be able to search contact using phone", async () => {
    const response = await supertest(web)
      .get("/api/contacts")
      .query({
        phone: "081",
      })
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(10);
  });

  it("should be able to search contact is no result", async () => {
    const response = await supertest(web)
      .get("/api/contacts")
      .query({
        phone: "wrong",
      })
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(0);
    expect(response.body.paging.current_page).toBe(1);
    expect(response.body.paging.total_page).toBe(0);
    expect(response.body.paging.size).toBe(10);
  });

  it("should be able to search contact with paging", async () => {
    const response = await supertest(web)
      .get("/api/contacts")
      .query({
        page: 2,
        size: 1,
      })
      .set("X-API-TOKEN", "test123");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(0);
    expect(response.body.paging.current_page).toBe(2);
    expect(response.body.paging.total_page).toBe(1);
    expect(response.body.paging.size).toBe(1);
  });
});
