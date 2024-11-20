const color = [
    "White",
    "Black",
    "Green",
    "Red",
    "Yellow"
];


const filters = [
    {
        id: "color",
        name: "color",
        options: [
            { value: "white", label: "white" },
            { value: "green", label: "green" },
            { value: "red", label: "red" },
            { value: "yellow", label: "yellow" },
        ]
    },
    {
        id: "size",
        name: "size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },
        ]
    }
];


const singleFilter = [
    {
        id: "price",
        name: "price",
        options: [
            { value: "159-399", label: "159-399" },
            { value: "399-999", label: "399-999" },
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% and Above" },
            { value: "30", label: "30% and Above" },
            { value: "40", label: "40% and Above" },
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "in_stock" },
            { value: "out_in_stock", label: "out_in_stock" },
        ]
    }
];

export default { color, filters, singleFilter };
