import type { IProduct } from '../types/product-type';

const productTitleTranslations: Record<string, string> = {
	'iphone-15-pro-001': 'אייפון 15 פרו',
	'iPhone 15 Pro': 'אייפון 15 פרו',
	'iPhone 14 Pro': 'אייפון 14 פרו',
	'Apple iPad Air': 'אייפד אייר של אפל',
	'Galaxy Android Tablet': 'טאבלט גלקסי אנדרואיד',
	'Headphones Wireless.': 'אוזניות אלחוטיות',
	'Gaming Headphone': 'אוזניות גיימינג',
	'Headphone with Mic': 'אוזניות עם מיקרופון'
};

const textTranslations: Record<string, string> = {
	Apple: 'אפל',
	Headphones: 'אוזניות',
	Phones: 'טלפונים',
	'Mobile Tablets': 'סמארטפונים וטאבלטים',
	'Mobile ': 'סלולר',
	Tablets: 'טאבלטים',
	Samsung: 'סמסונג',
	'In stock': 'במלאי',
	'Out of stock': 'אזל מהמלאי',
	Announced: 'הוכרז',
	Colors: 'צבעים',
	Technology: 'טכנולוגיה',
	'3G bands': 'תדרי 3G',
	'4G bands': 'תדרי 4G',
	'Graphics Coprocessor': 'מעבד גרפי',
	'Wireless Type': 'תקשורת אלחוטית',
	Storage: 'נפח אחסון',
	Color: 'צבע',
	Warranty: 'אחריות',
	Condition: 'מצב',
	Brand: 'מותג',
	Model: 'דגם',
	'2023, February': 'פברואר 2023',
	'06 March, 2023': '6 במרץ 2023',
	'07 March, 2023': '7 במרץ 2023',
	'John doe': 'יוסי כהן',
	'Smith Doe': 'דני לוי',
	'Lunar Green': 'ירוק לונארי',
	Dark: 'כהה',
	'Red Wine': 'יין אדום',
	'Peach Schnapps': 'ורוד אפרסק'
};

const phraseTranslations: Array<[RegExp, string]> = [
	[/Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being\./gi, 'מוצר איכותי ונוח לשימוש יומיומי, עם ביצועים מצוינים ותמורה טובה למחיר.'],
	[/Lunar Green, Dark, Red Wine, Peach Schnapps/gi, 'ירוק לונארי, כהה, יין אדום, ורוד אפרסק'],
	[/Bluetooth/gi, 'בלוטות׳']
];

const productDescriptions: Record<string, string> = {
	'iphone-15-pro-001':
		'אייפון 15 פרו מציע ביצועים חזקים, עיצוב פרימיום ומערך צילום מתקדם לשימוש יומיומי, עבודה ותוכן. המכשיר כולל מסך חד ובהיר, מעבד מהיר, תמיכה בקישוריות מתקדמת וחוויית iOS חלקה ונוחה.'
};

export function translateProductText(value: unknown, product?: IProduct): string {
	if (value === null || value === undefined) return '';
	const text = String(value).trim();
	if (!text) return '';

	if (product?.id && productTitleTranslations[product.id]) return productTitleTranslations[product.id];
	if (productTitleTranslations[text]) return productTitleTranslations[text];
	if (textTranslations[text]) return textTranslations[text];

	return phraseTranslations.reduce((result, [pattern, replacement]) => {
		return result.replace(pattern, replacement);
	}, text);
}

export function translateProductDescription(product: IProduct): string {
	return productDescriptions[product.id] ?? translateProductText(product.description);
}

export function translateProductList(values: string[] = []): string {
	return values.map((value) => translateProductText(value)).join(', ');
}
