const sarees = [
  // RED
  { id: 1, type: "Banarasi Saree", origin: "Varanasi, Uttar Pradesh", price: 3999, fabric: "Silk", color: "red" ,image:"https://i.pinimg.com/736x/68/12/66/6812663b94bc280d931b8ce98eeebe0c.jpg"},
  { id: 2, type: "Baluchari Saree", origin: "Murshidabad, West Bengal", price: 4599, fabric: "Silk", color: "red" ,image:"https://i.pinimg.com/736x/e0/9e/a8/e09ea88eacffa6a4fec94f25ded53d69.jpg"},
  { id: 3, type: "Patola Saree", origin: "Patan, Gujarat", price: 8999, fabric: "Silk", color: "red",image:"https://i.pinimg.com/1200x/09/f0/ed/09f0ed9f1ed02934ada91fdd74f5a670.jpg" },
  { id: 4, type: "Chanderi Saree", origin: "Madhya Pradesh", price: 2899, fabric: "Silk Cotton", color: "red",image:"https://i.pinimg.com/1200x/3d/34/d1/3d34d15b97782283990b1eafd712111b.jpg" },
  { id: 5, type: "Kanjivaram Saree", origin: "Kanchipuram, Tamil Nadu", price: 6499, fabric: "Silk", color: "red",image:"https://i.pinimg.com/1200x/cd/37/7d/cd377d7d927b4fbf48bcf18a5ef1ff76.jpg" },

  // WHITE
  { id: 6, type: "Cotton Handloom Saree", origin: "West Bengal", price: 1899, fabric: "Cotton", color: "white",image:"https://i.pinimg.com/736x/fd/83/d8/fd83d8ae70f710cae0bbd138e8f62c3f.jpg" },
  { id: 7, type: "Linen Saree", origin: "Kerala", price: 2599, fabric: "Linen", color: "white",image:"https://i.pinimg.com/736x/18/6f/c0/186fc0c6a9eebeab537049b185bc3d14.jpg" },
  { id: 8, type: "Kota Doria Saree", origin: "Rajasthan", price: 2199, fabric: "Cotton Silk", color: "white" ,image:"https://i.pinimg.com/1200x/e9/25/42/e9254228f84c4559191a30cf62643398.jpg"},
  { id: 9, type: "Khadi Saree", origin: "Gujarat", price: 1999, fabric: "Khadi Cotton", color: "white" ,image:"https://i.pinimg.com/1200x/cb/e4/99/cbe49996e717c162b9a28cb794be2958.jpg"},
  { id: 10, type: "Tant Saree", origin: "West Bengal", price: 1699, fabric: "Cotton", color: "white" ,image:"https://i.pinimg.com/736x/fd/ca/8e/fdca8e7bf2f90a9bac20e246725e1824.jpg"},

  // PINK
  { id: 11, type: "Organza Saree", origin: "Uttar Pradesh", price: 3299, fabric: "Organza", color: "pink",image:"https://i.pinimg.com/1200x/b1/74/17/b174175bad91535a27c2eb7684d063cd.jpg" },
  { id: 12, type: "Soft Silk Saree", origin: "Karnataka", price: 4899, fabric: "Silk", color: "pink",image:"https://i.pinimg.com/736x/a3/61/5c/a3615cbdfd8dea8fd562f8a7c2776d0b.jpg" },
  { id: 13, type: "Chiffon Saree", origin: "Mumbai, Maharashtra", price: 2499, fabric: "Chiffon", color: "pink" ,image:"https://i.pinimg.com/1200x/af/1a/a3/af1aa3fb502fab13d2a9ec257b6bf26e.jpg"},
  { id: 14, type: "Georgette Saree", origin: "Surat, Gujarat", price: 2799, fabric: "Georgette", color: "pink",image:"https://i.pinimg.com/1200x/96/83/3b/96833b7ab3494fbfc11bcb63a40aa307.jpg" },
  { id: 15, type: "Paithani Saree", origin: "Maharashtra", price: 6999, fabric: "Silk", color: "pink",image:"https://i.pinimg.com/736x/18/10/2b/18102bdc5cc55017acd4e91442162ccb.jpg" },
  

  // BLUE
  { id: 16, type: "Kanjivaram Saree", origin: "Tamil Nadu", price: 5999, fabric: "Silk", color: "blue",image:"https://i.pinimg.com/1200x/15/40/6e/15406e1101a45bf81d25de6c64380e7c.jpg" },
  { id: 17, type: "Tant Saree", origin: "West Bengal", price: 1599, fabric: "Cotton", color: "blue",image:"https://i.pinimg.com/736x/91/dc/9c/91dc9cec9647cdb5a11e54972bab3f1c.jpg" },
  { id: 18, type: "Maheshwari Saree", origin: "Madhya Pradesh", price: 2399, fabric: "Cotton Silk", color: "blue" ,image:"https://i.pinimg.com/1200x/17/a1/4d/17a14d3b14d45bc2ab45012cbd7458e3.jpg"},
  { id: 19, type: "Linen Saree", origin: "Andhra Pradesh", price: 2699, fabric: "Linen", color: "blue",image:"https://i.pinimg.com/736x/eb/ad/c7/ebadc76a61517601933c0d0ca7dfa557.jpg" },
  { id: 20, type: "Silk Blend Saree", origin: "Karnataka", price: 3499, fabric: "Silk Blend", color: "blue",image:"https://i.pinimg.com/736x/ae/21/a2/ae21a25641b1a1950cd8daccfea638b1.jpg" },
  { id: 21, type: "Banarasi Saree", origin: "Uttar Pradesh", price: 4599, fabric: "Silk", color: "blue", image: "https://i.pinimg.com/736x/f2/e0/47/f2e0472108003a02cfc44c56ff018fd9.jpg"},


  // GREEN
  { id: 21, type: "Mysore Silk Saree", origin: "Karnataka", price: 5299, fabric: "Silk", color: "green",image:"https://i.pinimg.com/736x/24/d5/e6/24d5e6a59a8f4b1baa29d45b4fa6be9b.jpg" },
  { id: 22, type: "Chanderi Saree", origin: "Madhya Pradesh", price: 2799, fabric: "Silk Cotton", color: "green" ,image:"https://i.pinimg.com/736x/6f/2f/e3/6f2fe37efddf792c037c10153caf2227.jpg"},
  { id: 23, type: "Bandhani Saree", origin: "Rajasthan", price: 2599, fabric: "Georgette", color: "green",image:"https://i.pinimg.com/736x/4b/79/bf/4b79bf2a721fdb2ef83fa7bc64fe597e.jpg" },
  { id: 24, type: "Ikath Saree", origin: "Odisha", price: 2899, fabric: "Cotton", color: "green",image:"https://i.pinimg.com/1200x/f6/9b/8e/f69b8eea3ed6916f437cda645318e6b8.jpg" },
  { id: 25, type: "Cotton Silk Saree", origin: "Tamil Nadu", price: 3199, fabric: "Cotton Silk", color: "green" ,image:"https://i.pinimg.com/736x/7b/c8/6f/7bc86f491e1ffebd11af71dc6899d062.jpg"},

  // EXTRA (to make 30)
  { id: 26, type: "Soft Cotton Saree", origin: "Andhra Pradesh", price: 1799, fabric: "Cotton", color: "golden",image:"https://i.pinimg.com/1200x/20/11/fc/2011fc935f1d25b3556889447ba18185.jpg" },
  { id: 27, type: "Silk Saree", origin: "Assam", price: 4599, fabric: "Silk", color: "golden",image:"https://i.pinimg.com/736x/f9/17/00/f917008b31867c0f78f30816b0f3940b.jpg" },
  { id: 28, type: "Handloom Saree", origin: "Telangana", price: 2299, fabric: "Cotton", color: "golden",image:"https://i.pinimg.com/1200x/81/c2/5e/81c25eaf8f20e22215623545c45d0c17.jpg" },
  { id: 29, type: "Designer Organza Saree", origin: "Delhi", price: 3799, fabric: "Organza", color: "golden",image:"https://i.pinimg.com/736x/dc/bc/c4/dcbcc49e80182886e6a908b55a3c9c02.jpg" },
  { id: 30, type: "Traditional Cotton Saree", origin: "Tamil Nadu", price: 1999, fabric: "Cotton", color: "golden",image:"https://i.pinimg.com/1200x/9e/5e/9c/9e5e9c0bdd8b2272418844fd3ce48bd4.jpg" },


  //new red data
  { id: 31, type: "Banarasi Silk Saree", origin: "Uttar Pradesh", price: 5499, fabric: "Silk", color: "red", image: "https://i.pinimg.com/736x/2c/c7/1d/2cc71dca5245f79fe87328515bf301cf.jpg" },
  { id: 32, type: "Chiffon Saree", origin: "Gujarat", price: 1999, fabric: "Chiffon", color: "red", image: "https://i.pinimg.com/1200x/c6/f0/cc/c6f0cc240826849565e9a1b3c2a79244.jpg" },
  { id: 33, type: "Georgette Saree", origin: "Delhi", price: 2299, fabric: "Georgette", color: "red", image: "https://i.pinimg.com/1200x/b2/73/3d/b2733d1b691114fb07e351cdd84c38a3.jpg" },
  { id: 34, type: "Bandhani Saree", origin: "Rajasthan", price: 2599, fabric: "Cotton Silk", color: "red", image: "https://i.pinimg.com/1200x/d0/9b/ba/d09bba3bf183f955f80a9b613d1db9c1.jpg" },
  { id: 35, type: "Silk Linen Saree", origin: "West Bengal", price: 3499, fabric: "Silk Linen", color: "red", image: "https://i.pinimg.com/736x/93/5e/d0/935ed023c2ac25c456d5b0c5f2627002.jpg" },

   { id: 36, type: "Kanjivaram Saree", origin: "Tamil Nadu", price: 7999, fabric: "Pure Silk", color: "green", image: "https://i.pinimg.com/1200x/f8/52/79/f852797b95c6567b45e1f43e70840a2e.jpg" },
  { id: 37, type: "Cotton Silk Saree", origin: "Andhra Pradesh", price: 3199, fabric: "Cotton Silk", color: "green", image: "https://i.pinimg.com/1200x/51/8f/54/518f54a56a6c0a8a9867aa11b206b159.jpg" },
  { id: 38, type: "Handloom Saree", origin: "Odisha", price: 2799, fabric: "Cotton", color: "green", image: "https://i.pinimg.com/736x/6f/b2/27/6fb22701fc00e518bc1b8117c19609c5.jpg" },
  { id: 39, type: "Chanderi Saree", origin: "Madhya Pradesh", price: 2899, fabric: "Silk Cotton", color: "green", image: "https://i.pinimg.com/736x/c6/27/63/c62763dc593148f483b9c7dfc311316f.jpg" },
  { id: 40, type: "Tussar Silk Saree", origin: "Bihar", price: 4999, fabric: "Tussar Silk", color: "green", image: "https://i.pinimg.com/736x/26/48/40/26484000702a9393e56537ac40e986e7.jpg" },


    { id: 41, type: "Maheshwari Saree", origin: "Madhya Pradesh", price: 2399, fabric: "Cotton Silk", color: "blue", image: "https://i.pinimg.com/1200x/ee/36/b3/ee36b30c7c6c48248a6232feb378ad08.jpg" },
  { id: 42, type: "Linen Saree", origin: "Kerala", price: 2899, fabric: "Linen", color: "blue", image: "https://i.pinimg.com/1200x/6e/f0/03/6ef00359a97d5704ca75f7b862110d52.jpg" },
  { id: 43, type: "Soft Silk Saree", origin: "Karnataka", price: 4599, fabric: "Soft Silk", color: "blue", image: "https://i.pinimg.com/736x/09/4a/c8/094ac8b8b46ff031dad28f0a8466c4bc.jpg" },
  { id: 44, type: "Cotton Saree", origin: "West Bengal", price: 1599, fabric: "Cotton", color: "blue", image: "https://i.pinimg.com/736x/c5/d4/16/c5d416cf633e1985683dd56b978bfe6f.jpg" },
  { id: 45, type: "Printed Saree", origin: "Jaipur", price: 1899, fabric: "Rayon", color: "blue", image: "https://i.pinimg.com/736x/13/ac/10/13ac102b8b87423c99ca1fc0049379f4.jpg" },

   { id: 46, type: "Paithani Saree", origin: "Maharashtra", price: 8999, fabric: "Silk", color: "golden", image: "https://i.pinimg.com/1200x/b7/c2/71/b7c2718649dd51a00fa75deedda0a7f1.jpg" },
  { id: 47, type: "Banarasi Brocade Saree", origin: "Uttar Pradesh", price: 7499, fabric: "Brocade Silk", color: "golden", image: "https://i.pinimg.com/736x/6a/e2/75/6ae2758c5ad823b02acf3b0e1a794ded.jpg" },
  { id: 48, type: "Zari Work Saree", origin: "Surat", price: 5299, fabric: "Art Silk", color: "golden", image: "https://i.pinimg.com/1200x/81/39/57/813957b5a8e41889ee8fb11ed520da1f.jpg" },
  { id: 49, type: "Kora Silk Saree", origin: "Tamil Nadu", price: 4799, fabric: "Kora Silk", color: "golden", image: "https://i.pinimg.com/1200x/ac/da/95/acda95ad2c94b56429ca5e7d4e93dc83.jpg" },
  { id: 50, type: "Temple Border Saree", origin: "Tamil Nadu", price: 6999, fabric: "Silk", color: "golden", image: "https://i.pinimg.com/736x/ae/32/89/ae3289c1e0ecd04f8098276c99282178.jpg" },

    { id: 51, type: "Organza Saree", origin: "Mumbai", price: 3199, fabric: "Organza", color: "pink", image: "https://i.pinimg.com/1200x/ca/a5/b3/caa5b3a643f280224273bff58d90fbf5.jpg" },
  { id: 52, type: "Net Saree", origin: "Delhi", price: 2599, fabric: "Net", color: "pink", image: "https://i.pinimg.com/736x/c6/f1/c8/c6f1c8a19a9cdd4393ffd0d12674a36c.jpg" },
  { id: 53, type: "Bandhej Saree", origin: "Rajasthan", price: 2899, fabric: "Cotton Silk", color: "pink", image: "https://i.pinimg.com/736x/72/f7/53/72f7535938a7b054d1f7b9fb383efc34.jpg" },
  { id: 54, type: "Soft Cotton Saree", origin: "Andhra Pradesh", price: 1799, fabric: "Cotton", color: "pink", image: "https://i.pinimg.com/474x/03/fd/9f/03fd9f0d1672e42fd199f008413744e9.jpg" },
  { id: 55, type: "Designer Saree", origin: "Mumbai", price: 5999, fabric: "Silk Blend", color: "pink", image: "https://i.pinimg.com/1200x/05/c1/77/05c17706ae06570287b6dbb10aebdc98.jpg" },

   { id: 56, type: "Kerala Kasavu Saree", origin: "Kerala", price: 2499, fabric: "Cotton", color: "white", image: "https://i.pinimg.com/736x/51/5f/02/515f02a1df2587af34bffea373a11478.jpg" },

  { id: 57, type: "Chikankari Saree", origin: "Uttar Pradesh", price: 3199, fabric: "Cotton Silk", color: "white", image: "https://i.pinimg.com/736x/a5/b0/47/a5b0477f2ced786901334c836c40a4d5.jpg" },

  { id: 58, type: "Linen Handloom Saree", origin: "West Bengal", price: 2899, fabric: "Linen", color: "white", image: "https://i.pinimg.com/1200x/06/a6/7a/06a67ac60741306250de852dfddecc64.jpg" },

  { id: 59, type: "Organza Silk Saree", origin: "Mumbai", price: 4599, fabric: "Organza Silk", color: "white", image: "https://i.pinimg.com/1200x/04/b5/d6/04b5d688c38ff8023c424c801d2ebc54.jpg" },

  { id: 60, type: "Tussar Silk Saree", origin: "Bihar", price: 5299, fabric: "Tussar Silk", color: "white", image: "https://i.pinimg.com/736x/b6/c7/ce/b6c7ce981423105091a54647cddd656e.jpg" }
];

export default sarees;
