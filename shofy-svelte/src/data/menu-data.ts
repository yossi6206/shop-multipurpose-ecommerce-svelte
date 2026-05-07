import { type IMenuItem, type IMobileType } from "../types/menu-d-type";

export const menu_data:IMenuItem[] = [
  {
    id:1,
    link:'/',
    title:'בית',
    mega_menu:true,
    home_pages:[
      {
        id:1,
        title:'אלקטרוניקה',
        img:'/img/menu/menu-home-1.jpg',
        link:'/'
      },
      {
        id:2,
        title:'אופנה',
        img:'/img/menu/menu-home-2.jpg',
        link:'/home-2'
      },
      {
        id:3,
        title:'יופי',
        img:'/img/menu/menu-home-3.jpg',
        link:'/home-3'
      },
      {
        id:4,
        title:'אלקטרוניקה',
        img:'/img/menu/menu-home-4.jpg',
        link:'/home-4'
      },
    ]
  },
  {
    id:2,
    link:'/shop',
    title:'חנות',
    mega_menu:true,
    shop_mega_menus:[
      {
        link:'/shop',
        title:'עמודי חנות',
        list_menus:[
          {title:'פריסת רשת',link:'/shop'},
          {title:'קטגוריות חנות',link:'/shop-categories'},
          {title:'פריסת רשימה',link:'/shop-list'},
          {title:'פריסה מלאה',link:'/shop-full-width'},
          {title:'פריסה 1600px',link:'/shop-1600'},
          {title:'סרגל צד שמאלי',link:'/shop'},
          {title:'סרגל צד ימני',link:'/shop-right-sidebar'},
          {title:'ללא סרגל צד',link:'/shop-no-sidebar'},
        ]
      },
      {
        link:'/shop',
        title:'תכונות',
        list_menus:[
          {title:'סינון נפתח',link:'/shop-filter-dropdown'},
          {title:'סינון offcanvas',link:'/shop-filter-offcanvas'},
          {title:'סרגל סינון',link:'/shop'},
          {title:'כפתור טעינה נוספת',link:'/shop-load-more'},
          {title:'פריסה 1600px',link:'/shop-1600'},
          {title:'רשימת אוספים',link:'/shop-list'},
          {title:'חיפוש מוסתר',link:'/shop'},
          {title:'חיפוש מסך מלא',link:'/shop'},
        ]
      },
      {
        link:'/shop',
        title:'סגנון ריחוף',
        list_menus:[
          {title:'סגנון ריחוף 1',link:'/shop'},
          {title:'סגנון ריחוף 2',link:'/shop'},
          {title:'סגנון ריחוף 3',link:'/shop'},
          {title:'סגנון ריחוף 4',link:'/shop'}
        ]
      },
    ]
  },
  {
    id:3,
    link:'/shop',
    title:'מוצרים',
    mega_menu:true,
    product_menus:[
      {
        id:1,
        title:'עמוד חנות',
        link:'/shop',
        dropdown_menus:[
          {title:'קטגוריות בלבד',link:'/shop-categories'},
          {title:'רשת עם סרגל צד',link:'/shop-filter-offcanvas'},
          {title:'רשת חנות',link:'/shop'},
          {title:'קטגוריות',link:'/shop-categories'},
          {title:'רשימת חנות',link:'/shop-list'},
          {title:'פרטי מוצר',link:'/product-details/641e887d05f9ee1717e1348a'},
        ]
      },
      {
        id:2,
        title:'מוצרים',
        link:'/shop',
        dropdown_menus:[
          {title:'מוצר פשוט',link:'/product-details/641e887d05f9ee1717e1348a'},
          {title:'עם וידאו',link:'/product-details-video'},
          {title:'עם טיימר ספירה לאחור',link:'/product-details-countdown'},
          {title:'וריאציות',link:'/product-details-swatches'},
          {title:'תצוגת רשימה',link:'/product-details-list'},
          {title:'גלריית פרטים',link:'/product-details-gallery'},
          {title:'עם סליידר',link:'/product-details-slider'},
        ]
      },
      {
        id:3,
        title:'מסחר אלקטרוני',
        link:'/shop',
        dropdown_menus:[
          {title:'עגלת קניות',link:'/cart'},
          {title:'מעקב הזמנה',link:'/order'},
          {title:'השוואה',link:'/compare'},
          {title:'רשימת משאלות',link:'/wishlist'},
          {title:'תשלום',link:'/checkout'},
          {title:'החשבון שלי',link:'/profile'}
        ]
      },
      {
        id:4,
        title:'עמודים נוספים',
        link:'/shop',
        dropdown_menus:[
          {title:'אודות',link:'/about'},
          {title:'התחברות',link:'/login'},
          {title:'הרשמה',link:'/register'},
          {title:'שכחתי סיסמה',link:'/forgot'},
          {title:'שגיאה 404',link:'/404'}
        ]
      },
    ]
  },
  {
    id:4,
    link:'/coupons',
    title:'קופונים',
  },
  {
    id:5,
    link:'/blog',
    title:'בלוג',
    drop_down:true,
    dropdown_menus:[
      {title:'בלוג סטנדרטי',link:'/blog'},
      {title:'רשת בלוג',link:'/blog-grid'},
      {title:'רשימת בלוג',link:'/blog-list'},
      {title:'פרטי בלוג - רוחב מלא',link:'/blog-details-2'},
      {title:'פרטי בלוג',link:'/blog-details/1'},
    ]
  },
  {
    id:5,
    link:'/contact',
    title:'צור קשר',
  },
]

// mobile menu data 
export const mobile_menu:IMobileType[] = [
  {
    id: 1,
    homes: true,
    title: 'בית',
    link: '/',
    home_pages: [
      {
        id:1,
        title:'אלקטרוניקה',
        img:'/img/menu/menu-home-1.jpg',
        link:'/'
      },
      {
        id:2,
        title:'אופנה',
        img:'/img/menu/menu-home-2.jpg',
        link:'/home-2'
      },
      {
        id:3,
        title:'יופי',
        img:'/img/menu/menu-home-3.jpg',
        link:'/home-3'
      },
      {
        id:4,
        title:'אלקטרוניקה',
        img:'/img/menu/menu-home-4.jpg',
        link:'/home-4'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'מוצרים',
    link: '/shop',
    sub_menus: [
      { title: 'חנות', link: '/shop' },
      { title: 'חנות - רוחב מלא', link: '/shop-full-width' },
      { title: 'חנות 1600px', link: '/shop-1600' },
      { title: 'חנות - סרגל צד ימני', link: '/shop-right-sidebar' },
      { title: 'חנות - ללא סרגל צד', link: '/shop-no-sidebar' },
      { title: 'סינון נפתח', link: '/shop-filter-dropdown' },
      { title: 'סינון offcanvas', link: '/shop-filter-offcanvas' },
      { title: 'טעינה נוספת', link: '/shop-load-more' },
      { title: 'רשימת חנות', link: '/shop-list' },
      { title: 'קטגוריות בלבד', link: '/shop-categories' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'פרטי מוצרים',
    link: '/product-details/641e887d05f9ee1717e1348a',
    sub_menus: [
      { title: 'פרטי מוצר', link: '/product-details/641e887d05f9ee1717e1348a'},
      { title: 'עם וידאו', link: '/product-details-video'},
      { title: 'עם ספירה לאחור', link: '/product-details-countdown'},
      { title: 'וריאציות', link: '/product-details-swatches'},
      { title: 'רשימת פרטים', link: '/product-details-list'},
      { title: 'גלריית פרטים', link: '/product-details-gallery'},
      { title: 'סליידר פרטים', link: '/product-details-slider'},
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'מסחר אלקטרוני',
    link: '/cart',
    sub_menus: [
      { title: 'עגלת קניות', link: '/cart' },
      { title: 'השוואה', link: '/compare' },
      { title: 'רשימת משאלות', link: '/wishlist' },
      { title: 'תשלום', link: '/checkout' },
      { title: 'החשבון שלי', link: '/profile' },
    ],
  },
  {
    id: 5,
    sub_menu: true,
    title: 'עמודים נוספים',
    link: '/login',
    sub_menus: [
      { title: 'התחברות', link: '/login' },
      { title: 'הרשמה', link: '/register' },
      { title: 'שכחתי סיסמה', link: '/forgot' },
      { title: 'שגיאה 404', link: '/404' },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: 'קופונים',
    link: '/coupons',
  },
  {
    id: 7,
    sub_menu: true,
    title: 'בלוג',
    link: '/blog',
    sub_menus: [
      { title: 'בלוג סטנדרטי', link: '/blog' },
      { title: 'רשת בלוג', link: '/blog-grid' },
      { title: 'רשימת בלוג', link: '/blog-list' },
      { title: 'פרטי בלוג', link: '/blog-details/1' },
      { title: 'פרטי בלוג - רוחב מלא', link: '/blog-details-2' },
    ]
  },
  {
    id: 8,
    single_link: true,
    title: 'צור קשר',
    link: '/contact',
  },
]