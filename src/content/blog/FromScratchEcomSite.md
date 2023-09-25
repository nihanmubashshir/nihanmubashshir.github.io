---
title: "Building an eccomerce site from scratch"
description: "Learning how to build a an eccomerce site using javascript with as little npm package as possible."
---
# Building an eccomerce site from scratch with Javascript

## Purpose

While at my current job, I work on projects involving the development of e-commerce sites, where the backend infrastructure is predominantly provided by various platforms such as Shopify and Bigcommerce. I am mostly responsible for taking a stack of different microservices and combining them to build the store that fits the requirements.

I have always wanted to create the entire experience with minimal reliance on npm packages. This blog serves as a development log, chronicling my incremental progress whenever I find the time.

## Higher Level Plan

The entire project will have the following parts.

1. Database
2. API
    1. Admin: Used by the admin dashboard.
    2. Storefront : This API will primarily be used by the headless storefront.
3. Admin Frontend
4. Storefront

I am using GitHub issues to track the progress of this learning project. I am not quite sure if it's a good idea or not, but the project will have a monorepo architecture.

### Database
This will be a standalone module responsible for handling the database. I am using PostgreSQL. Because I want to force myself to get good at SQL, I have decided not to use any ORM. I will be using the repository pattern for this one.

In simpler terms, this module will simply consist of a number of classes that map to entities like products, orders, or customers.

Those classes will have methods to handle CRUD operations on those entities.

### Admin API

The admin API will be a REST API. I am skipping the authentication layer for now. I am planning on bolting that in later.

**I haven't yet decided what do with other parts of the project.**

Last update: September 26, 2023.

