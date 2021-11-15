const pedidos = [
    { id: 1, prato: "X-bacon:", status: "Pedido entregue!" },
    { id: 2, prato: "Sundae:", status: "Seu pedido está sendo preparado." },
    { id: 3, prato: "Fritas média:", status: "Entregador a caminho, fique atento!" },
    { id: 4, prato: "Nuggets:", status: "Pedido entregue!" },
    { id: 5, prato: "X-tudo:", status: "Entregador a caminho, fique atento!" },
  ];
    
    pedidos.forEach(function(pedido) {
    console.log(pedido.prato, pedido.status);
});
      
    