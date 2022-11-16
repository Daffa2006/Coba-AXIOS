  // let url = 'https://reqres.in/api/users';

  // fetch(url+'/1')
  // .then((response)=>response.json())
  // .then((data) => console.log(data.data))
  // .catch((error)=> console.log('error : ' + error))

  let url = 'https://dummyjson.com/products'
  // fetch(url+'/1')
  //             .then(res=>res.json())
  //             .then(json=>console.log(json))

    axios.get(url).then((response) => {
      console.log(response)
      let TBody = document.querySelector('.insert-data');

      for (let product of response.data.products) {
        let productData = {
            id : product.id,
            title : product.title,
            description : product.description,
            price : product.price,
            category: product.category,
            images: product.images[0]
        }

        // ini pakai inner HTML

        // let table = `<tr>
        // <td>${product.id}</td>
        // <td>${product.title}</td>
        // <td>${product.description}</td>
        // <td>${product.price}</td>
        // <td>${product.category}</td>
        // <td><img  src="${product.images[0]}" alt="Foto Produk"></td>
        // </tr>`;
        // console.log(product)

        // pakai create dan append

        let createRow = document.createElement('tr');
        let createCell = document.createElement('td');
        let tr = TBody.appendChild(createRow)
        let dataId = document.createTextNode(productData.id)
        let dataValue = `
        <td>${productData.id}</td>
        <td>${productData.title}</td>
        <td>${productData.description}</td>
        <td>$${productData.price}</td>
        <td>${productData.category}</td>
        <td><img  src="${productData.images}" alt="Foto Produk"></td>`
        tr.innerHTML = dataValue;

        // let dataTitle = document.createTextNode(productData.title)
        // let title = tr.appendChild(createCell).appendChild(dataTitle)
        // console.log(id)
        // // TBody.innerHTML = table;
        // let row1 = document.querySelector('.insert-data > *')
        // console.log(row1)
      }
      

      
      
  })

 