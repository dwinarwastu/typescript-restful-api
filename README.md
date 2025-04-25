## Installation

1. Clone the repository

```bash
git clone https://github.com/dwinarwastu/subscription-tracker-api.git
cd subscription-tracker-api
```

2. Install dependencies

```bash
npm install
```

3. Setup Prisma

```bash
npx prisma migrate dev

npx prisma generate
```

4. Create a `.env` file in the root directory with the following variables

```
# DATABASE
DATABASE_URL="mysql://root:@localhost:3306/typescript_restful_api"
```

5. Run the server

```bash
npm run dev
```