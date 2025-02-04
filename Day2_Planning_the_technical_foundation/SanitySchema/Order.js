export default {
  name: "order",
  type: "document",
  fields: [
    { name: "userId", type: "string", title: "User ID" },
    { name: "items", type: "array", of: [{ type: "reference", to: [{ type: "product" }] }], title: "Ordered Items" },
    { name: "totalAmount", type: "number", title: "Total Amount" },
    { name: "paymentStatus", type: "string", title: "Payment Status" },
    { name: "orderStatus", type: "string", title: "Order Status" },
  ],
};
