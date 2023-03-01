-- CreateTable
CREATE TABLE "Product" (
    "productID" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "brand_name" TEXT,
    "brand_logo" TEXT,
    "image" TEXT NOT NULL
);
