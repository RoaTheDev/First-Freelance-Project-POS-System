import { useState, useEffect } from 'react';
import { Search, Home, Package, ShoppingCart, User, Bell, LogOut, Plus, Edit, Trash2, Calendar, Printer } from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Input } from '../components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";

// Elizabeth Rose blood flame color theme
const theme = {
    primary: "#FF4B6A", // Blood red
    secondary: "#FFB6C1", // Light pink
    accent: "#FF8FAB", // Rose pink
    background: "#FFF0F5", // Lavender blush
    text: "#4A0010", // Dark blood red
    dark: "#800020", // Burgundy
    light: "#FFEBEE", // Very light pink
};

const sampleProducts = [
    { id: 1, name: "Coffee Latte", category: "Beverages", price: 5.99, stock: 100 },
    { id: 2, name: "Croissant", category: "Pastries", price: 3.49, stock: 50 },
    { id: 3, name: "Chicken Sandwich", category: "Food", price: 7.99, stock: 30 },
    { id: 4, name: "Green Tea", category: "Beverages", price: 4.49, stock: 80 },
    { id: 5, name: "Chocolate Cake", category: "Dessert", price: 6.99, stock: 25 },
];

const recentSales = [
    { id: 101, customerName: "Alice Smith", date: "2025-04-13", amount: 15.47, items: 3 },
    { id: 102, customerName: "Bob Johnson", date: "2025-04-12", amount: 24.98, items: 5 },
    { id: 103, customerName: "Carol Davis", date: "2025-04-11", amount: 7.99, items: 1 },
    { id: 104, customerName: "David Wilson", date: "2025-04-10", amount: 32.45, items: 7 },
];

const categories = ["All", "Beverages", "Food", "Pastries", "Dessert", "Merchandise"];

// Component for responsive sidebar (desktop only)
const Sidebar = ({ activePage, setActivePage }) => {
    return (
        <div
            className="hidden lg:block w-64 h-full bg-white shadow-lg"
            style={{ backgroundColor: theme.light }}
        >
            <div className="p-4">
                <h1 className="text-xl font-bold" style={{ color: theme.primary }}>Kon Ti II</h1>
            </div>

            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <button
                            onClick={() => setActivePage("dashboard")}
                            className={`flex w-full items-center p-3 rounded-lg ${
                                activePage === "dashboard" ? "text-white" : `hover:bg-opacity-10 hover:bg-gray-100`
                            }`}
                            style={{
                                backgroundColor: activePage === "dashboard" ? theme.primary : "transparent",
                                color: activePage === "dashboard" ? "white" : theme.text
                            }}
                        >
                            <Home className="mr-3" size={20} />
                            <span>Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActivePage("products")}
                            className={`flex w-full items-center p-3 rounded-lg ${
                                activePage === "products" ? "text-white" : `hover:bg-opacity-10 hover:bg-gray-100`
                            }`}
                            style={{
                                backgroundColor: activePage === "products" ? theme.primary : "transparent",
                                color: activePage === "products" ? "white" : theme.text
                            }}
                        >
                            <Package className="mr-3" size={20} />
                            <span>Products</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActivePage("sales")}
                            className={`flex w-full items-center p-3 rounded-lg ${
                                activePage === "sales" ? "text-white" : `hover:bg-opacity-10 hover:bg-gray-100`
                            }`}
                            style={{
                                backgroundColor: activePage === "sales" ? theme.primary : "transparent",
                                color: activePage === "sales" ? "white" : theme.text
                            }}
                        >
                            <ShoppingCart className="mr-3" size={20} />
                            <span>Sales</span>
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="absolute bottom-0 w-64 p-4 border-t" style={{ borderColor: theme.secondary }}>
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center" style={{ backgroundColor: theme.secondary }}>
                        <User size={20} style={{ color: theme.primary }} />
                    </div>
                    <div>
                        <p className="font-medium" style={{ color: theme.text }}>Staff User</p>
                        <button className="text-sm flex items-center" style={{ color: theme.primary }}>
                            <LogOut size={14} className="mr-1" /> Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MobileBottomNav = ({ activePage, setActivePage }) => {
    return (
        <div
            className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-30 flex justify-around items-center h-16"
            style={{ backgroundColor: theme.light, borderColor: theme.secondary }}
        >
            <button
                onClick={() => setActivePage("dashboard")}
                className="flex flex-col items-center justify-center w-1/3 h-full"
            >
                <Home size={24} style={{ color: activePage === "dashboard" ? theme.primary : theme.text }} />
                <span
                    className="text-xs mt-1"
                    style={{ color: activePage === "dashboard" ? theme.primary : theme.text }}
                >
          Dashboard
        </span>
            </button>

            <button
                onClick={() => setActivePage("products")}
                className="flex flex-col items-center justify-center w-1/3 h-full"
            >
                <Package size={24} style={{ color: activePage === "products" ? theme.primary : theme.text }} />
                <span
                    className="text-xs mt-1"
                    style={{ color: activePage === "products" ? theme.primary : theme.text }}
                >
          Products
        </span>
            </button>

            <button
                onClick={() => setActivePage("sales")}
                className="flex flex-col items-center justify-center w-1/3 h-full"
            >
                <ShoppingCart size={24} style={{ color: activePage === "sales" ? theme.primary : theme.text }} />
                <span
                    className="text-xs mt-1"
                    style={{ color: activePage === "sales" ? theme.primary : theme.text }}
                >
          Sales
        </span>
            </button>
        </div>
    );
};

// Main Application Component
export default function POSApplication() {
    const [activePage, setActivePage] = useState("dashboard");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const filteredProducts = sampleProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const DashboardContent = () => (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium" style={{ color: theme.text }}>
                            Total Sales Today
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold" style={{ color: theme.primary }}>$542.89</div>
                        <p className="text-xs text-green-500">+12% from yesterday</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium" style={{ color: theme.text }}>
                            Transactions Today
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold" style={{ color: theme.primary }}>24</div>
                        <p className="text-xs text-green-500">+3 from yesterday</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium" style={{ color: theme.text }}>
                            Low Stock Items
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold" style={{ color: theme.primary }}>7</div>
                        <p className="text-xs text-gray-500">Needs attention</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium" style={{ color: theme.text }}>
                            Total Products
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold" style={{ color: theme.primary }}>152</div>
                        <p className="text-xs text-gray-500">In inventory</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle style={{ color: theme.text }}>Recent Sales</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b" style={{ borderColor: theme.secondary }}>
                                <th className="text-left py-3 px-2">Customer</th>
                                <th className="text-left py-3 px-2">Date</th>
                                <th className="text-left py-3 px-2">Items</th>
                                <th className="text-left py-3 px-2">Amount</th>
                                <th className="text-left py-3 px-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {recentSales.map(sale => (
                                <tr
                                    key={sale.id}
                                    className="border-b hover:bg-gray-50"
                                    style={{ borderColor: theme.secondary }}
                                >
                                    <td className="py-3 px-2">{sale.customerName}</td>
                                    <td className="py-3 px-2">{sale.date}</td>
                                    <td className="py-3 px-2">{sale.items}</td>
                                    <td className="py-3 px-2">${sale.amount.toFixed(2)}</td>
                                    <td className="py-3 px-2">
                                        <div className="flex space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                style={{
                                                    borderColor: theme.primary,
                                                    color: theme.primary
                                                }}
                                                className="hidden sm:flex"
                                            >
                                                <Printer size={14} className="mr-1" /> Print
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                style={{
                                                    borderColor: theme.primary,
                                                    color: theme.primary
                                                }}
                                                className="sm:hidden"
                                            >
                                                <Printer size={14} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                style={{
                                                    borderColor: theme.text,
                                                    color: theme.text
                                                }}
                                            >
                                                <Edit size={14} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const ProductsContent = () => (
        <div className="space-y-6 pb-20 lg:pb-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Products</h1>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                            style={{ borderColor: theme.accent }}
                        />
                        <Search
                            className="absolute left-3 top-2.5"
                            size={18}
                            style={{ color: theme.primary }}
                        />
                    </div>

                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger
                            className="w-full sm:w-40"
                            style={{ borderColor: theme.accent }}
                        >
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(category => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                style={{
                                    backgroundColor: theme.primary,
                                    color: "white"
                                }}
                            >
                                <Plus size={16} className="mr-1" /> Add Product
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle style={{ color: theme.text }}>Add New Product</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <label htmlFor="name" style={{ color: theme.text }}>Product Name</label>
                                    <Input id="name" style={{ borderColor: theme.accent }} />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="category" style={{ color: theme.text }}>Category</label>
                                    <Select>
                                        <SelectTrigger style={{ borderColor: theme.accent }}>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.filter(cat => cat !== "All").map(category => (
                                                <SelectItem key={category} value={category}>
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="price" style={{ color: theme.text }}>Price</label>
                                    <Input id="price" type="number" style={{ borderColor: theme.accent }} />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="stock" style={{ color: theme.text }}>Stock</label>
                                    <Input id="stock" type="number" style={{ borderColor: theme.accent }} />
                                </div>
                                <div className="flex justify-end space-x-2 mt-4">
                                    <Button
                                        variant="outline"
                                        style={{
                                            borderColor: theme.text,
                                            color: theme.text
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: "white"
                                        }}
                                    >
                                        Save Product
                                    </Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Products List */}
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr
                                className="border-b"
                                style={{
                                    backgroundColor: theme.light,
                                    borderColor: theme.secondary
                                }}
                            >
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Name</th>
                                <th className="text-left py-3 px-4 hidden sm:table-cell" style={{ color: theme.text }}>Category</th>
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Price</th>
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Stock</th>
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <tr
                                        key={product.id}
                                        className="border-b hover:bg-gray-50"
                                        style={{ borderColor: theme.secondary }}
                                    >
                                        <td className="py-3 px-4">{product.name}</td>
                                        <td className="py-3 px-4 hidden sm:table-cell">
                        <span
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                                backgroundColor: theme.secondary,
                                color: theme.text
                            }}
                        >
                          {product.category}
                        </span>
                                        </td>
                                        <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                                        <td className="py-3 px-4">
                        <span
                            className={`px-2 py-1 rounded-full text-xs ${
                                product.stock < 30 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                            }`}
                        >
                          {product.stock}
                        </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    style={{
                                                        borderColor: theme.accent,
                                                        color: theme.text
                                                    }}
                                                >
                                                    <Edit size={14} />
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    style={{
                                                        borderColor: "#EF4444",
                                                        color: "#EF4444"
                                                    }}
                                                >
                                                    <Trash2 size={14} />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-8 text-center text-gray-500">
                                        No products found matching your criteria
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    // Component for Sales Content
    const SalesContent = () => (
        <div className="space-y-6 pb-20 lg:pb-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Sales History</h1>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search customer..."
                            className="pl-10"
                            style={{ borderColor: theme.accent }}
                        />
                        <Search
                            className="absolute left-3 top-2.5"
                            size={18}
                            style={{ color: theme.primary }}
                        />
                    </div>

                    <Button
                        variant="outline"
                        style={{
                            borderColor: theme.accent,
                            color: theme.text
                        }}
                    >
                        <Calendar size={16} className="mr-1" /> Date Range
                    </Button>

                    <Button
                        style={{
                            backgroundColor: theme.primary,
                            color: "white"
                        }}
                    >
                        <Plus size={16} className="mr-1" /> New Sale
                    </Button>
                </div>
            </div>

            {/* Sales List */}
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr
                                className="border-b"
                                style={{
                                    backgroundColor: theme.light,
                                    borderColor: theme.secondary
                                }}
                            >
                                <th className="text-left py-3 px-4 hidden sm:table-cell" style={{ color: theme.text }}>Sale ID</th>
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Customer</th>
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Date</th>
                                <th className="text-left py-3 px-4 hidden sm:table-cell" style={{ color: theme.text }}>Items</th>
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Total</th>
                                <th className="text-left py-3 px-4" style={{ color: theme.text }}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {recentSales.map(sale => (
                                <tr
                                    key={sale.id}
                                    className="border-b hover:bg-gray-50"
                                    style={{ borderColor: theme.secondary }}
                                >
                                    <td className="py-3 px-4 hidden sm:table-cell">#{sale.id}</td>
                                    <td className="py-3 px-4">{sale.customerName}</td>
                                    <td className="py-3 px-4">{sale.date}</td>
                                    <td className="py-3 px-4 hidden sm:table-cell">{sale.items}</td>
                                    <td className="py-3 px-4">${sale.amount.toFixed(2)}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                style={{
                                                    borderColor: theme.primary,
                                                    color: theme.primary
                                                }}
                                                className="hidden sm:flex"
                                            >
                                                <Printer size={14} className="mr-1" /> Print
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                style={{
                                                    borderColor: theme.primary,
                                                    color: theme.primary
                                                }}
                                                className="sm:hidden"
                                            >
                                                <Printer size={14} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                style={{
                                                    borderColor: theme.text,
                                                    color: theme.text
                                                }}
                                            >
                                                <Edit size={14} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                style={{
                                                    borderColor: "#EF4444",
                                                    color: "#EF4444"
                                                }}
                                            >
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-50" style={{ backgroundColor: theme.background }}>
            {/* Sidebar - Desktop Only */}
            <Sidebar activePage={activePage} setActivePage={setActivePage} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation Bar */}
                <header className="bg-white shadow-sm z-10" style={{ backgroundColor: theme.light }}>
                    <div className="px-4 py-3 flex items-center justify-between">
                        {/* Mobile Logo or Title */}
                        <div className="lg:hidden">
                            <h1 className="text-lg font-bold" style={{ color: theme.primary }}>Elizabeth POS</h1>
                        </div>

                        <div className="hidden sm:block relative w-64">


                        </div>

                        <div className="flex items-center space-x-3">
                            <button
                                className="p-2 rounded-full relative hidden sm:block"
                                style={{ backgroundColor: theme.light }}
                            >
                                <Bell size={20} style={{ color: theme.primary }} />
                                <span
                                    className="absolute top-0 right-0 w-2 h-2 rounded-full"
                                    style={{ backgroundColor: theme.primary }}
                                ></span>
                            </button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: theme.secondary }}
                                        >
                                            <User size={16} style={{ color: theme.primary }} />
                                        </div>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4">
                    {activePage === "dashboard" && <DashboardContent />}
                    {activePage === "products" && <ProductsContent />}
                    {activePage === "sales" && <SalesContent />}
                </main>
            </div>

            <MobileBottomNav activePage={activePage} setActivePage={setActivePage} />
        </div>
    );
}