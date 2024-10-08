import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about-us", label: "من نحن" },
    { href: "#products", label: "منتجلتنا" },
    { href: "#contact-us", label: "تواصل معنا" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'العلامات التجارية' },
    { value: '500+', label: 'المحلات التجارية' },
    { value: '250k+', label: 'عملاء' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "اسم الحذاء جوردان-01",
        price: "16,000.00 ج.س ",
    },
    {
        imgURL: shoe5,
        name: "اسم الحذاء جوردان-10",
        price: "14,500.00 ج.س ",
    },
    {
        imgURL: shoe6,
        name: "اسم الحذاء جوردان-100",
        price: "22,000.00 ج.س ",
    },
    {
        imgURL: shoe7,
        name: "اسم الحذاء جوردان-001",
        price: "28,000.00 ج.س ",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "ًالشحن مجانا",
        subtext: "استمتع بالتسوق السلس مع خدمة الشحن المجانية لدينا."
    },
    {
        imgURL: shieldTick,
        label: "الدفع الآمن",
        subtext: "استمتع بمعاملات خالية من القلق مع خيارات الدفع الآمنة لدينا."
    },
    {
        imgURL: support,
        label: "احب مساعدتك",
        subtext: "فريقنا المتخصص موجود هنا لمساعدتك في كل خطوة على الطريق."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'علي الطيب',
        rating: 4.7,
        feedback: "الاهتمام بالتفاصيل وجودة المنتج تجاوزت توقعاتي. أوصي به بشدة!"
    },
    {
        imgURL: customer2,
        customerName: 'تسنيم احمد',
        rating: 4.4,
        feedback: "لم يلب المنتج توقعاتي فحسب، بل تجاوزها أيضًا. سأعود بالتأكيد إلى هذا المتجر!"
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/37308520?s=400&u=a58e5b842c7dd7c1b37f3ef96c5f1e5df974cd5b&v=4",
        customerName: 'محمد فادي',
        rating: 2.8,
        feedback: "بصراحة لم ترق لي منتجات المتجر. ولست مهتم بمنتجات هذا المتجر!"
    }
];


export const footerLinks = [
    {
        title: "منتجات",
        links: [
            { name: "القوات الجوية 1", link: "/" },
            { name: "اير ماكس 1", link: "/" },
            { name: "اير جوردان 1", link: "/" },
            { name: "القوات الجوية 2", link: "/" },
            { name: "حذاء نايكي وافل ريسر", link: "/" },
            { name: "نايكي كورتيز", link: "/" },
        ],
    },
    {
        title: "يساعد",
        links: [
            { name: "من نحن", link: "/" },
            { name: "كيف نعمل", link: "/" },
            { name: "سياسة الخصوصية", link: "/" },
            { name: "سياسة الدفع", link: "/" },
        ],
    },
    {
        title: "تواصل معنا",
        links: [
            { name: "fademohammed48@gmail.com", link: "fademohammed48@gmail.com" },
            { name: "+249912341391", link: "tel:+249912341391" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
