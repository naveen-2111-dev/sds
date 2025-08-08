const getInitials = (name: string) => {
    if (!name) return "U";
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
};

const getAvatarColor = (name: string) => {
    if (!name) return "bg-gray-500";
    const colors = [
        "bg-gray-500", "bg-green-500", "bg-purple-500", "bg-red-500",
        "bg-yellow-500", "bg-indigo-500", "bg-pink-500", "bg-teal-500"
    ];
    const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return colors[hash % colors.length];
};

export { getInitials, getAvatarColor };