export const loginData = [
    {
        username : '',
        password: ''
    }
];

export const carouselData = [
    {
        id: 1,
        src: '/img/carousel_1.jpg',
        label: 'Happiness is ...',
        subLabel: 'Receiving what you ordered online.'
    },
    {
        id: 2,
        src: '/img/carousel_2.jpg',
        label: 'Shop...',
        subLabel: 'In the name of Love.'
    },
    {
        id: 3,
        src: '/img/carousel_3.jpg',
        label: 'Buy it ...',
        subLabel: "If you can't stop thinking about it."
    }
];

export const categories = [
    [1, 'men', {
        title: "T-shirts, sweaters, hoodies and men's accessories. From basics to original creations, for every style.",
        img: "/img/categories/men.jpg"
    }],
    
    [2, 'women', {
        title: "T-shirts, sweaters, hoodies and women's accessories. From basics to original creations, for every style.",
        img: "/img/categories/women.jpg"
    }],

    [3, 'accessories', {
        title: "Details matter! Liven up your interior with our selection of home accessories.",
        img: "/img/categories/accessories.jpg"
    }],

    [4, 'bags', {
        title: "Framed poster and vector images, all you need to give personality to your walls or bring your creative projects to life.",
        img: "/img/categories/bags.jpg"
    }]
];

export const storeProducts = [
    {
        id: 1,
        title: "zip sneakers",
        brand: '/img/studiodesign.jpg',
        category: "men",
        price: 19.02,
        size: {
            size:['42', '43', '44', '45'],
            amount: [45, 50, 35, 23]
        },
        color: ['black', 'white'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/1/main.jpg", "/img/1/main2.jpg", "/img/1/1.jpg", "/img/1/2.jpg", "/img/1/3.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 10, 
        featured: true,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 2,
        title: "state sunglasses",
        brand: '/img/studiodesign.jpg',
        category: "accessories",
        price: 28.56,
        size: {
            size: ['s', 'm', 'l', 'xl'],
            amount: [145, 500, 350, 123]
        },
        color: ['black'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'weeks'],
        img: ["/img/2/main.jpg", "/img/2/main2.jpg", "/img/2/1.jpg", "/img/2/2.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 10, 
        featured: true,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 3,
        title: "blue raincoat",
        brand: '/img/graphiccorner.jpg',
        category: "women",
        price: 25.64,
        size: {
            size: ['40x60', '60x90', '80x120'],
            amount: [145, 500, 350]
        },
        color: ['blue'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/3/main.jpg", "/img/3/main2.jpg", "/img/3/1.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 0, 
        featured: true,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 4,
        title: "hooded coat",
        brand: '/img/graphiccorner.jpg',
        category: "men",
        price: 25.99,
        size: {
            size: ['40x60', '60x90', '80x120'],
            amount: [45, 500, 250]
        },
        color: ['black'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'weeks'],
        img: ["/img/4/main.jpg", "/img/4/main2.jpg", "/img/4/1.jpg", "/img/4/2.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: false,
        discountRate: 10, 
        featured: false,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 5,
        title: "settlement backpack",
        brand: '/img/graphiccorner.jpg',
        category: "bags",
        price: 11.40,
        size: {
            size: ['ruled', 'plain', 'doted', 'squarred'],
            amount: [45, 50, 25, 0]
        },
        color: ['brown'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'weeks'],
        img: ["/img/5/main.jpg", "/img/5/main2.jpg", "/img/5/1.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: false,
        discountRate: 0, 
        featured: true,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 6,
        title: "leather backpack",
        brand: '/img/graphiccorner.jpg',
        category: "bags",
        price: 11.40,
        size: {
            size: ['ruled', 'plain', 'doted', 'squarred'],
            amount: [45, 50, 25, 0]
        },
        color: ['black'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/6/main.jpg", "/img/6/main2.jpg", "/img/6/1.jpg", "/img/6/2.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 0, 
        featured: false,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 7,
        title: "navy blue bag",
        brand: '/img/graphiccorner.jpg',
        category: "bags",
        price: 15.40,
        size: {
            size: ['ruled', 'plain', 'doted', 'squarred'],
            amount: [25, 45, 5, 10]
        },
        color: ['blue'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/7/main.jpg", "/img/7/main2.jpg", "/img/7/1.jpg", "/img/7/2.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 10, 
        featured: false,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 8,
        title: "zip fedora",
        brand: '/img/studiodesign.jpg',
        category: "accessories",
        price: 16.71,
        size: {
            size: ['standart'],
            amount: [250]
        },
        color: ['black', 'brown'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'weeks'],
        img: ["/img/8/main.jpg", "/img/8/main2.jpg", "/img/8/1.jpg", "/img/8/2.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 0, 
        featured: false,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 9,
        title: "ear headphones",
        brand: '/img/studiodesign.jpg',
        category: "accessories",
        price: 36.71,
        size: {
            size: ['standart'],
            amount: [250]
        },
        color: ['black'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/9/main.jpg", "/img/9/main2.jpg", "/img/9/1.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 0, 
        featured: true,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 10,
        title: "cotton hat",
        brand: '/img/studiodesign.jpg',
        category: "accessories",
        price: 10.52,
        size: {
            size: ['standart'],
            amount: [250]
        },
        color: ['grey','black'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/10/main.jpg", "/img/10/main2.jpg", "/img/10/1.jpg", "/img/10/2.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: false,
        discountRate: 10, 
        featured: false,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 11,
        title: "crewneck blouse",
        brand: '/img/studiodesign.jpg',
        category: "women",
        price: 12.29,
        size: {
            size: ['s', 'm', 'l'],
            amount: [23, 34, 43]
        },
        color: ['blue'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/11/main.jpg", "/img/11/main2.jpg", "/img/11/1.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 0, 
        featured: false,
        inCart: false,
        count: 0,
        total: 0
    },

    {
        id: 12,
        title: "striped braid trilby",
        brand: '/img/graphiccorner.jpg',
        category: "accessories",
        price: 7.96,
        size: {
            size: ['standart'],
            amount: [250]
        },
        color: ['blue'],
        tax: "excluded",
        stock: true,
        delivery: [true, 1, 3, 'days'],
        img: ["/img/12/main.jpg", "/img/12/main2.jpg", "/img/12/1.jpg"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
        newItem: true,
        discountRate: 0, 
        featured: false,
        inCart: false,
        count: 0,
        total: 0
    },
];

export const detailProduct = {
                                id: 12,
                                title: "striped braid trilby",
                                brand: '/img/graphiccorner.jpg',
                                category: "accessories",
                                price: 7.96,
                                size: {
                                    size: ['standart'],
                                    amount: [250]
                                },
                                color: ['blue'],
                                tax: "excluded",
                                stock: true,
                                delivery: [true, 1, 3, 'days'],
                                img: ["/img/12/main.jpg", "/img/12/main2.jpg", "/img/12/1.jpg"],
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                                details: ["Aenean auctor sem ac ex efficitur", "Non mattis odio bibendum", "Sed vitae enim at tortor finibus", "Integer facilisis eleifend vehicula", "In hac habitasse platea dictumst"],
                                newItem: true,
                                discountRate: 0, 
                                featured: false,
                                inCart: false,
                                count: 0,
                                total: 0
                            };