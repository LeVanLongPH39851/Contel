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

export function formatDate(date) {
    return `${String(date.getDate()).padStart(2, "0")}/${String(
        date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
}

// ISO Week Number
export function getISOWeek(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);

    d.setDate(d.getDate() + 4 - (d.getDay() || 7));

    const yearStart = new Date(d.getFullYear(), 0, 1);

    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

export const formatDateLast = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()); // 2 chữ số cuối
    return `${day}/${month}/${year}`;
};

export const getYesterday = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 22); //1
    return yesterday.toISOString().split('T')[0];
};