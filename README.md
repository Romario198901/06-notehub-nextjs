# NoteHub - Next.js Notes Application

A modern note-taking application built with **Next.js 16**, **React 19**, and **TypeScript**. NoteHub provides a clean, intuitive interface for creating, reading, updating, and deleting notes with advanced features like search, pagination, and real-time state management.

## Features

- 📝 **Create & Manage Notes** - Easily create, edit, and delete notes
- 🔍 **Search Functionality** - Quickly find notes with debounced search
- 📄 **Pagination** - Browse through notes with smooth pagination
- ⚡ **Real-time Updates** - Instant UI updates with React Query
- 🎨 **Modern UI** - Responsive design with CSS Modules
- 📱 **Mobile Friendly** - Optimized for all device sizes
- 🔔 **Toast Notifications** - User feedback with React Hot Toast
- ♿ **Accessible** - Built with accessibility best practices

## Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org)
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest)
- **HTTP Client**: [Axios](https://axios-http.com)
- **Form Management**: [Formik](https://formik.org) + [Yup](https://github.com/jquense/yup) validation
- **Notifications**: [React Hot Toast](https://react-hot-toast.com)
- **Pagination**: [React Paginate](https://github.com/AdeleD/react-paginate)
- **Loading UI**: [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)
- **Performance**: [Use Debounce](https://www.npmjs.com/package/use-debounce)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading skeleton
│   └── notes/             # Notes related pages
│       ├── page.tsx       # Notes list page
│       └── [id]/          # Dynamic note detail page
├── components/            # Reusable React components
│   ├── Header/           # Navigation header
│   ├── Footer/           # Footer component
│   ├── NoteForm/         # Form for creating/editing notes
│   ├── NoteList/         # List of notes
│   ├── SearchBox/        # Search functionality
│   ├── Pagination/       # Pagination controls
│   ├── Modal/            # Modal dialog
│   └── TanStackProvider/ # React Query provider
├── lib/                  # Utilities and API client
│   └── api.ts           # API integration
├── types/               # TypeScript type definitions
│   └── note.ts         # Note type definitions
└── public/             # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project):
   ```bash
   cd 06-notehub-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

The application will automatically reload as you make changes to the code.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Usage

### Creating a Note
1. Navigate to the "New Note" section
2. Fill in the note title and content using the provided form
3. Click "Save" to create the note

### Viewing Notes
1. Visit the Notes page to see all your notes
2. Click on any note to view its full details
3. Use the search box to filter notes by keyword

### Editing a Note
1. Navigate to the note detail page
2. Click "Edit" to modify the note content
3. Save your changes

### Deleting a Note
1. On the note detail page or list, click "Delete"
2. Confirm the deletion

### Searching Notes
- Use the search box on the Notes page
- Search is debounced for optimal performance
- Results update automatically as you type

## Key Components

### NoteForm
Handles note creation and editing with form validation using Formik and Yup.

### NoteList
Displays a paginated list of notes with search functionality.

### SearchBox
Provides debounced search input for filtering notes.

### Pagination
Manages navigation between different pages of notes.

## API Integration

The application communicates with a backend API through the `lib/api.ts` module using Axios. React Query handles caching and synchronization of data.

## Styling

- **CSS Modules** for component-scoped styling
- Organized module files alongside components
- Global styles in `app/globals.css`

## Best Practices

- TypeScript for type safety
- Error boundaries for graceful error handling
- Loading states with spinner components
- Debounced search for performance
- Client-side rendering where appropriate with `use client` directive

## Development Tips

- Use React Query DevTools (included) for debugging state management
- Check browser console for TypeScript and linting errors
- Hot reload is enabled for rapid development

## Deployment

### Deploy on Vercel

The easiest way to deploy NoteHub is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect it's a Next.js app and configure the build settings
4. Your app will be live!

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and part of the GoIt curriculum.

## Support

For issues or questions, please refer to the [Next.js documentation](https://nextjs.org/docs) or contact the development team.
