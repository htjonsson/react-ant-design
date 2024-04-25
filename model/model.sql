CREATE VIEW FactOrder AS
    SELECT t1.entityId,
           t1.orderId,
           t1.productId,
           t2.customerId,
           t2.employeeId,
           t2.shipperId,
           t1.unitPrice,
           t1.quantity,
           t1.discount * 100 AS discount
      FROM OrderDetail t1
           LEFT OUTER JOIN
           SalesOrder t2 ON t2.entityId = t1.orderId;