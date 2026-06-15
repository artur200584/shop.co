# SHOP.CO

Навчальний e-commerce проект на Next.js. На цьому етапі в проекті реалізована базова структура сторінки, навігація, hero-секція, блок брендів і секція товарів з отриманням даних з API.

## Технології

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Axios
- lucide-react

## Запуск проекту

Встановіть залежності:

```bash
npm install
```

+Запустіть dev-сервер:

```bash
npm run dev
```

Після запуску проект буде доступний за адресою:

```txt
http://localhost:3000
```

Якщо порт `3000` зайнятий, Next.js може запустити проект на іншому доступному порту, наприклад `3001`.

## Структура проекту

```txt
app/
  globals.css
  layout.tsx
  page.tsx

components/
  shared/
    Brands.tsx
    DesktopNavLinks.tsx
    Header.tsx
    MobileNavMenu.tsx
    Nav.tsx
    ProductCard.tsx
    Products.tsx
    SearchCommandItems.tsx
    Title.tsx
    Style.tsx

  ui/
    button.tsx
    command.tsx
    dialog.tsx
    input.tsx
    input-group.tsx
    navigation-menu.tsx
    textarea.tsx

lib/
  api.ts
  types.ts
  utils.ts

next.config.ts
package.json
```

## Основні папки

### `app`

Папка з основними файлами App Router.

- `layout.tsx` - кореневий layout проекту.
- `page.tsx` - головна сторінка сайту.
- `globals.css` - глобальні стилі, Tailwind CSS та CSS-змінні.

### `components/shared`

Папка для кастомних компонентів, які формують основні секції сайту.

- `Nav.tsx` - головна навігація сайту.
- `DesktopNavLinks.tsx` - посилання для desktop-навігації.
- `MobileNavMenu.tsx` - мобільне меню.
- `SearchCommandItems.tsx` - елементи пошуку через command dialog.
- `Header.tsx` - hero-секція головної сторінки.
- `Brands.tsx` - секція з брендами.
- `Products.tsx` - секція товарів `New Arrivals`.
- `ProductCard.tsx` - картка окремого товару.
- `Title.tsx` - спільний компонент заголовка секції.
- `Style.tsx` - комопонент який рендерить силки на види одягу.

### `components/ui`

Папка з UI-компонентами, створеними через shadcn/ui або адаптованими під проект.

Тут лежать базові компоненти:

- `Button`
- `Command`
- `Dialog`
- `Input`
- `InputGroup`
- `NavigationMenu`
- `Textarea`

Ці компоненти використовуються як база для складніших компонентів у `components/shared`.

### `lib`

Папка для допоміжної логіки проекту.

- `api.ts` - функція для отримання товарів з DummyJSON API.
- `types.ts` - TypeScript-типи для продуктів.
- `utils.ts` - допоміжні утиліти, зокрема `cn` для об'єднання className.

## API

Для товарів використовується DummyJSON API.

У `lib/api.ts` товари отримуються з кількох категорій:

```ts
const categories = ["mens-shirts", "mens-shoes", "tops", "womens-dresses"];
```

Для кожної категорії виконується окремий запит:

```txt
https://dummyjson.com/products/category/{category}
```

Після цього всі товари об'єднуються в один масив через `flatMap`.

## Типізація товарів

Тип продукту описаний у `lib/types.ts`.

Основні поля, які використовуються в інтерфейсі:

- `id`
- `title`
- `price`
- `discountPercentage`
- `rating`
- `images`
- `thumbnail`
- `reviews`

## Зображення

Для роботи з картинками використовується `next/image`.

Оскільки картинки товарів приходять з зовнішнього домену DummyJSON, у `next.config.ts` додано дозвіл для:

```txt
cdn.dummyjson.com
```

Після зміни `next.config.ts` потрібно перезапускати dev server.

## Поточна логіка секції товарів

У секції `Products` реалізовано:

- отримання масиву товарів через props;
- показ перших 4 товарів за замовчуванням;
- кнопка `View All`, яка відкриває всі товари;
- кнопка `Show Less`, яка згортає список назад до 4 товарів;
- відображення картки товару через `ProductCard`.

У картці товару зараз показується:

- зображення;
- назва;
- рейтинг у вигляді зірочок;
- ціна;
- відсоток знижки.

## Корисні команди

```bash
npm run dev
```

Запуск проекту в режимі розробки.

```bash
npm run build
```

Перевірка production-збірки.

```bash
npm run lint
```

Запуск ESLint.
