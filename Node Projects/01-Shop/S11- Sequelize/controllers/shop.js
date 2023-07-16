const Product = require("../models/product");
const Order = require("../models/order");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts().then((products) => {
        res.render("shop/cart", {
          path: "/cart",
          pageTitle: "Your Cart",
          products: products,
        });
      });
    })

    .catch((err) => {
      console.log(err);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      let newQty = 1;
      return cart
        .getProducts({ where: { id: prodId } })
        .then((products) => {
          let product;
          if (products.length > 0) {
            product = products[0];
          }

          if (product) {
            const oldQty = product.cartItem.quantity;
            newQty = oldQty + 1;
            return product;
          }
          return Product.findByPk(prodId);
        })
        .then((product) => {
          return fetchedCart.addProduct(product, {
            through: { quantity: newQty },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCartDeleteItem = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts({ where: { id: prodId } })
        .then((products) => {
          const product = products[0];
          return product.cartItem.destroy();
        })
        .then(() => {
          res.redirect("/cart");
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCreateOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart
        .getProducts()
        .then((products) => {
          return req.user.createOrder().then((order) => {
            order.addProducts(
              products.map((product) => {
                product.orderItem = { quantity: product.cartItem.quantity };
                return product;
              })
            );
          });
        })
        .then(() => {
          return fetchedCart.setProducts(null);
        })
        .then(() => {
          res.redirect("/orders");
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({ include: ["products"] })
    .then((orders) => {
      res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your Orders",
        orders: orders,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
