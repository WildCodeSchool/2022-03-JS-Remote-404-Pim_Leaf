const dataProducts = [
  {
    id: 1,
    product_name: "Sucre de canne non raffiné",
    detail: "details test",
    advise: "advise test",
    recipe_idea: "blabla",
    category: {
      id: 1,
      name: "épicerie sucrée",
    },
    allergen: {
      id: 2,
      name: "arachide",
    },
    origin: {
      id: 1,
      country: "France",
      region: "Alsace",
    },
    label: {
      id: 1,
      name: "bio",
      file: {
        id: 5,
        url: "http://une-jolie-image",
        alt: "une-image-de-tomate",
      },
    },
    company: {
      id: 5,
      company_name: "Moulin d'ici",
      description: "je suis un producteur de farine",
      phone: "0652658998",
      mail: "test@test.com",
      address: "Rue des Marronniier",
      postcode: 29290,
      file: {
        id: 8,
        url: "http://mysupercompany-logo",
        alt: "my-logo",
      },
    },
  },
];

export default dataProducts;
