export const toSlug = (text) => {
    return text
        .normalize("NFD")                    // Tách dấu tiếng Việt
        .replace(/[\u0300-\u036f]/g, "")     // Xóa dấu
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")        // Xóa ký tự đặc biệt
        .replace(/\s+/g, "-")                // Khoảng trắng -> -
        .replace(/-+/g, "-");                // Gộp nhiều dấu -
};