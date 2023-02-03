const categoryList = [
    {
        id: "all",
        name: "Tất cả thể loại",
    },
    {
        id: 1,
        name: "Ẩm thực - Nấu ăn"
    },
    {
        id: 2,
        name: "Cổ Tích - Thần Thoại"
    },
    {
        id: 3,
        name: "Công Nghệ Thông Tin"
    },
    {
        id: 4,
        name: "Ngoại Ngữ"
    },
    {
        id: 5,
        name: "Hồi Ký - Tuỳ Bút"
    },
    {
        id: 6,
        name: "Huyền bí - Giả Tưởng"
    },
];

const bookList = [
    {
        id: 1,
        name: "Làm Thế Nào Để Chinh Phục Đối Phương",
        category_id: 2,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        name: "Làm Thế Nào Để Chinh Phục Đối Phương",
        category_id: 2,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        name: "Làm Thế Nào Để Chinh Phục Đối Phương",
        category_id: 3,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 4,
        name: "Làm Thế Nào Để Chinh Phục Đối Phương",
        category_id: 4,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 5,
        name: "Làm Thế Nào Để Chinh Phục Đối Phương",
        category_id: 5,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 6,
        name: `Làm Thế Nào Để Chinh Phục Đối Phương`,
        category_id: 1,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 7,
        name: `Làm Thế Nào Để Chinh Phục Đối Phương`,
        category_id: 6,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 8,
        name: `Làm Thế Nào Để Chinh Phục Đối Phương`,
        category_id: 6,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 9,
        name: `Làm Thế Nào Để Chinh Phục Đối Phương`,
        category_id: 6,
        author: "bubu & dudu",
        source: "True Love Publisher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

const getAllCategory = () => {
    return {
        status: 1,
        data: categoryList
    };
}

const getBookByCategoryId = (categoryId) => {
    let bookFiltering = bookList.filter((book) => {
        return book.category_id == +categoryId;
    });

    return {
        status: 1,
        data: bookFiltering
    };
}

const getAllBook = () => {
    return {
        status: 1,
        data: bookList,
    };
}

const getBookById = (id) => {
    let bookFinding = bookList.find((book) => {
        return book.id === +id;
    });
    return {
        status: 1,
        data: bookFinding
    }
}

export {
    getAllCategory, getBookByCategoryId, getAllBook, getBookById
}