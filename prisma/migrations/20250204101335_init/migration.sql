-- CreateEnum
CREATE TYPE "Plans" AS ENUM ('FREE', 'BASIC', 'PRO', 'ENTERPRISE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripeId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billings" (
    "id" TEXT NOT NULL,
    "plan" "Plans" NOT NULL,
    "credits" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Billings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "customers" TEXT[],
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chatbot" (
    "id" TEXT NOT NULL,
    "welcomeMessage" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "textColor" TEXT NOT NULL,
    "helpdesk" TEXT NOT NULL,

    CONSTRAINT "Chatbot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Helpdesk" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,

    CONSTRAINT "Helpdesk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilterQuestions" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answered" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,

    CONSTRAINT "FilterQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerResponses" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answered" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "CustomerResponses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" TEXT NOT NULL,
    "live" BOOLEAN NOT NULL,
    "mailed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chatRoomId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "slot" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "domainId" TEXT NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
