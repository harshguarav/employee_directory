# Component Documentation

This document provides detailed information about each component in the Employee Directory application, including descriptions, props, and usage examples.

## Table of Contents

1. [Main Components](#main-components)
   - [AppSidebar](#appsidebar)
   - [EmployeeForm](#employeeform)
   - [EmployeeList](#employeelist)
   - [EmployeeCard](#employeecard)
   - [SearchBar](#searchbar)
   - [StatsCard](#statscard)
   - [ConfirmModal](#confirmmodal)
   - [CustomSelect](#customselect)
   - [ThemeToggle](#themetoggle)
   - [AnimatedThemeToggler](#animatedthemetoggler)
2. [UI Components](#ui-components)

---

## Main Components

### AppSidebar

**Location:** `src/components/AppSidebar.jsx`

**Description:** The main navigation sidebar component that displays the application logo, navigation menu items, and user profile section. It features a collapsible design that can switch between full and icon-only modes.

**Features:**
- Collapsible sidebar with icon-only mode
- Logo branding with "Penthara" name
- Navigation menu with Dashboard link
- User dropdown menu in footer
- Dark mode support

**Props:** None (uses internal state)

**Example Usage:**
```jsx
import { AppSidebar } from './components/AppSidebar';
import { SidebarProvider } from './components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {/* Your app content */}
      </main>
    </SidebarProvider>
  );
}
```

**Key Features:**
- Hover effects on navigation items
- Smooth transitions between collapsed/expanded states
- Responsive design adapts to screen sizes
- Dropdown menu for user actions (Account, Sign out)

---

### EmployeeForm

**Location:** `src/components/EmployeeForm.jsx`

**Description:** A modal form component for creating new employees or editing existing employee information. Features animated entrance/exit transitions and automatic avatar generation.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `initialData` | Object | No | Pre-populated employee data for editing mode |
| `onSubmit` | Function | Yes | Callback function when form is submitted |
| `onCancel` | Function | Yes | Callback function when form is cancelled |
| `departments` | Array | Yes | List of available departments for selection |

**initialData Object Structure:**
```javascript
{
  name: "John Doe",
  role: "Software Engineer",
  department: "Engineering",
  email: "john@example.com",
  phone: "+1234567890"
}
```

**Example Usage:**
```jsx
import EmployeeForm from './components/EmployeeForm';

function MyComponent() {
  const departments = ["Engineering", "Marketing", "Management", "Sales"];
  
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // API call to save employee
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <EmployeeForm
      departments={departments}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
}

// Editing existing employee
function EditEmployee() {
  const employee = {
    name: "Jane Smith",
    role: "Designer",
    department: "Marketing",
    email: "jane@example.com",
    phone: "+1987654321"
  };

  return (
    <EmployeeForm
      initialData={employee}
      departments={departments}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
}
```

**Features:**
- Automatic avatar generation using DiceBear API based on name
- Animated modal with backdrop blur
- Form validation (required fields)
- Dark mode support
- Responsive design
- Close button (X) in header

---

### EmployeeList

**Location:** `src/components/EmployeeList.jsx`

**Description:** A versatile component that displays employees in either a table (list) view or a grid (card) view. Includes edit/delete actions and active status management.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `employees` | Array | Yes | Array of employee objects to display |
| `onEdit` | Function | Yes | Callback when edit button is clicked |
| `onDelete` | Function | Yes | Callback when delete button is clicked |
| `onStatusChange` | Function | Yes | Callback when status is toggled |
| `viewMode` | String | Yes | Display mode: "list" or "grid" |

**Employee Object Structure:**
```javascript
{
  id: 1,
  name: "John Doe",
  role: "Software Engineer",
  department: "Engineering",
  email: "john@example.com",
  phone: "+1234567890",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  active: true
}
```

**Example Usage:**
```jsx
import EmployeeList from './components/EmployeeList';

function EmployeeDashboard() {
  const [viewMode, setViewMode] = useState('list');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      role: "Product Manager",
      department: "Management",
      email: "alice@company.com",
      phone: "+1234567890",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      active: true
    },
    // ... more employees
  ]);

  const handleEdit = (id) => {
    console.log('Edit employee:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete employee:', id);
  };

  const handleStatusChange = (id, currentStatus) => {
    console.log('Toggle status for:', id);
    // Update employee status
  };

  return (
    <div>
      <button onClick={() => setViewMode('list')}>List View</button>
      <button onClick={() => setViewMode('grid')}>Grid View</button>
      
      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
        viewMode={viewMode}
      />
    </div>
  );
}
```

**Features:**
- **List View**: Table format with columns for name, contact, department, role, status, and actions
- **Grid View**: Card-based layout with hover effects and visual styling
- Animated entry transitions for smooth rendering
- Status badge (Active/Inactive) with click-to-toggle
- Hover-activated action buttons (Edit/Delete)
- Confirm modal integration for delete actions
- Empty state message when no employees found
- Responsive design for mobile/tablet/desktop

---

### EmployeeCard

**Location:** `src/components/EmployeeCard.jsx`

**Description:** A card component for displaying individual employee information. Can be rendered in either list or grid view modes.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `employee` | Object | Yes | Employee data object |
| `onEdit` | Function | Yes | Callback for edit action |
| `onDelete` | Function | Yes | Callback for delete action |
| `viewMode` | String | No | Display mode: 'list' or 'grid' (default: 'grid') |

**Example Usage:**
```jsx
import EmployeeCard from './components/EmployeeCard';

function Example() {
  const employee = {
    id: 1,
    name: "Sarah Williams",
    role: "UX Designer",
    department: "Design",
    email: "sarah@company.com",
    phone: "+1234567890",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  };

  return (
    <EmployeeCard
      employee={employee}
      onEdit={(id) => console.log('Edit', id)}
      onDelete={(id) => console.log('Delete', id)}
      viewMode="grid"
    />
  );
}
```

**Features:**
- Gradient avatar borders with hover effects
- Contact information display (email and phone)
- Department badge
- Action buttons (Edit/Delete)
- Responsive hover states
- Glass-card styling effect

---

### SearchBar

**Location:** `src/components/SearchBar.jsx`

**Description:** A search and filter bar component with typewriter placeholder animation and department filtering dropdown.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `searchTerm` | String | Yes | Current search term value |
| `onSearchChange` | Function | Yes | Callback when search input changes |
| `filterDepartment` | String | Yes | Currently selected department filter |
| `onFilterChange` | Function | Yes | Callback when department filter changes |
| `departments` | Array | Yes | List of available departments |

**Example Usage:**
```jsx
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function EmployeeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All Departments');
  
  const departments = ["Engineering", "Marketing", "Management", "Sales"];

  return (
    <SearchBar
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      filterDepartment={filterDepartment}
      onFilterChange={setFilterDepartment}
      departments={departments}
    />
  );
}
```

**Features:**
- Animated typewriter placeholder text
- Real-time search input
- Department dropdown filter with CustomSelect component
- Search icon with focus animation
- Responsive layout (stacks on mobile)
- Dark mode support

**Typewriter Placeholders:**
- "Search members..."
- "Find by role..."
- "Type a name..."

---

### StatsCard

**Location:** `src/components/StatsCard.jsx`

**Description:** A simple card component for displaying statistics with an icon.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | String | Yes | Label for the statistic |
| `value` | String/Number | Yes | The statistic value to display |
| `icon` | ReactNode | Yes | Icon component or emoji |
| `color` | String | No | Color theme (future use) |

**Example Usage:**
```jsx
import StatsCard from './components/StatsCard';
import { Users, UserCheck } from 'lucide-react';

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatsCard
        title="Total Employees"
        value={250}
        icon={<Users className="w-6 h-6" />}
      />
      <StatsCard
        title="Active Members"
        value={235}
        icon={<UserCheck className="w-6 h-6" />}
      />
      <StatsCard
        title="Departments"
        value={8}
        icon="🏢"
      />
    </div>
  );
}
```

**Features:**
- Hover animation (lifts up on hover)
- Clean, minimal design
- Icon and value display
- Dark mode support
- Responsive sizing

---

### ConfirmModal

**Location:** `src/components/ConfirmModal.jsx`

**Description:** A confirmation dialog modal for destructive actions like deleting an employee.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | Boolean | Yes | Controls modal visibility |
| `onClose` | Function | Yes | Callback to close modal |
| `onConfirm` | Function | Yes | Callback when action is confirmed |
| `title` | String | Yes | Modal title text |
| `message` | String | Yes | Confirmation message text |

**Example Usage:**
```jsx
import ConfirmModal from './components/ConfirmModal';
import { useState } from 'react';

function DeleteAction() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    console.log('Item deleted');
    setIsOpen(false);
    // Perform delete action
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Delete Employee
      </button>
      
      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleDelete}
        title="Delete Member"
        message="Are you sure you want to delete this member? This action cannot be undone."
      />
    </>
  );
}
```

**Features:**
- Backdrop blur effect
- Warning icon with red color scheme
- Two-button layout (Cancel/Delete)
- Animated entrance/exit
- Centered modal positioning
- Focus trap for accessibility

---

### CustomSelect

**Location:** `src/components/CustomSelect.jsx`

**Description:** A custom dropdown select component with animations and checkmark indicators.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `value` | String | Yes | Currently selected value |
| `onChange` | Function | Yes | Callback when selection changes |
| `options` | Array | Yes | Array of option strings |
| `placeholder` | String | No | Placeholder text (default: "Select...") |
| `className` | String | No | Additional CSS classes |

**Example Usage:**
```jsx
import CustomSelect from './components/CustomSelect';
import { useState } from 'react';

function DepartmentSelector() {
  const [department, setDepartment] = useState('');
  
  const departments = [
    "Engineering",
    "Marketing",
    "Management",
    "Sales",
    "Human Resources"
  ];

  return (
    <CustomSelect
      value={department}
      onChange={setDepartment}
      options={departments}
      placeholder="Select a department..."
    />
  );
}
```

**Features:**
- Animated dropdown open/close
- Checkmark indicator for selected item
- Click-outside-to-close functionality
- Keyboard-friendly (planned)
- Scrollable option list (max-height: 60)
- Dark mode support
- Chevron icon rotation animation

---

### ThemeToggle

**Location:** `src/components/ThemeToggle.jsx`

**Description:** An advanced theme toggle button with customizable view transition animations.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | String | No | Additional CSS classes |
| `variant` | String | No | Animation variant: 'circle', 'rectangle', 'polygon', 'gif', 'circle-blur' |
| `start` | String | No | Animation origin: 'center', 'top-left', 'top-right', etc. |
| `blur` | Boolean | No | Enable blur effect during transition |
| `gifUrl` | String | No | URL for GIF mask animation |

**Available Variants:**
- `circle` - Circular expansion/contraction
- `rectangle` - Rectangular wipe
- `polygon` - Geometric polygon animation
- `circle-blur` - Circle with blur effect
- `gif` - Custom GIF mask

**Available Start Positions:**
- `center` (default)
- `top-left`, `top-right`, `top-center`
- `bottom-left`, `bottom-right`, `bottom-center`
- `left-right`, `right-left`, `top-down`, `bottom-up`

**Example Usage:**
```jsx
import { ThemeToggleButton } from './components/ThemeToggle';

// Basic usage
function Header() {
  return (
    <header>
      <ThemeToggleButton />
    </header>
  );
}

// Advanced usage with custom animation
function AdvancedTheme() {
  return (
    <ThemeToggleButton
      variant="circle"
      start="top-right"
      blur={true}
      className="fixed top-4 right-4"
    />
  );
}

// Using the hook directly
import { useThemeToggle } from './components/ThemeToggle';

function CustomThemeButton() {
  const { isDark, toggleTheme } = useThemeToggle({
    variant: 'rectangle',
    start: 'left-right',
    blur: false
  });

  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
```

**Features:**
- View Transition API integration
- Multiple animation variants
- Customizable start position
- Optional blur effects
- Smooth icon rotation animation
- Fallback for browsers without View Transition API
- LocalStorage persistence

---

### AnimatedThemeToggler

**Location:** `src/components/AnimatedThemeToggler.jsx`

**Description:** A simpler theme toggle component with circular clip-path animation emanating from the button position.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | String | No | Additional CSS classes |
| `duration` | Number | No | Animation duration in ms (default: 400) |

**Example Usage:**
```jsx
import { AnimatedThemeToggler } from './components/AnimatedThemeToggler';

function Navigation() {
  return (
    <nav>
      <AnimatedThemeToggler 
        className="ml-auto"
        duration={500}
      />
    </nav>
  );
}
```

**Features:**
- Circular clip-path animation from button position
- Sun/Moon icon toggle
- LocalStorage theme persistence
- Fallback for unsupported browsers
- Smooth transitions
- Responsive icon sizing

---

## UI Components

The application uses several UI components from Radix UI with custom styling. These are located in `src/components/ui/`:

### Sidebar Components

**Files:** `sidebar.tsx`

Components for building the application sidebar:
- `Sidebar` - Main container
- `SidebarHeader` - Header section
- `SidebarContent` - Main content area
- `SidebarFooter` - Footer section
- `SidebarMenu` - Menu container
- `SidebarMenuItem` - Individual menu item
- `SidebarMenuButton` - Clickable menu button
- `SidebarGroup` - Group container
- `SidebarGroupContent` - Group content wrapper

**Example:**
```jsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from './components/ui/sidebar';

<Sidebar>
  <SidebarHeader>Logo</SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>Dashboard</SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>
```

### Dialog Components

**Files:** Various from Radix UI

- `Dialog` - Modal dialog container
- `DialogTrigger` - Button to open dialog
- `DialogContent` - Dialog content wrapper
- `DialogHeader` - Dialog header section
- `DialogTitle` - Dialog title
- `DialogDescription` - Dialog description text

### Dropdown Menu

**Files:** `dropdown-menu.tsx`

Components for dropdown menus:
- `DropdownMenu` - Container
- `DropdownMenuTrigger` - Trigger button
- `DropdownMenuContent` - Menu content
- `DropdownMenuItem` - Individual menu item
- `DropdownMenuSeparator` - Visual separator

### Other UI Components

- **Button** (`button.tsx`) - Styled button component
- **Input** (`input.tsx`) - Form input component
- **Separator** (`separator.tsx`) - Visual divider
- **Tooltip** (`tooltip.tsx`) - Hover tooltip
- **Skeleton** (`skeleton.tsx`) - Loading placeholder
- **Sonner** (`sonner.tsx`) - Toast notifications

---

## Component Architecture Patterns

### State Management

Most components use React's built-in `useState` and `useEffect` hooks for local state management. The application follows a unidirectional data flow pattern where parent components pass data down via props and receive updates through callbacks.

### Styling Approach

All components use:
- **TailwindCSS** for utility-first styling
- **CSS custom properties** for theming (see `style.md`)
- **Motion (Framer Motion)** for animations
- **Dark mode** via class-based approach

### Animation Patterns

Components use Framer Motion's:
- `motion` components for declarative animations
- `AnimatePresence` for enter/exit transitions
- `initial`, `animate`, `exit` props for state-based animations

### Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus management in modals
- Screen reader text (`sr-only` class)

---

## Common Usage Patterns

### Form Handling

```jsx
const [formData, setFormData] = useState({
  name: '',
  role: '',
  department: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit(formData);
};
```

### Modal Management

```jsx
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const openModal = (item) => {
  setSelectedItem(item);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedItem(null);
};
```

### List Filtering

```jsx
const [searchTerm, setSearchTerm] = useState('');
const [filter, setFilter] = useState('All');

const filteredItems = items.filter(item => {
  const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesFilter = filter === 'All' || item.category === filter;
  return matchesSearch && matchesFilter;
});
```

---

## Best Practices

1. **Props Validation**: Always validate props in production apps (consider PropTypes or TypeScript)
2. **Error Boundaries**: Wrap components in error boundaries for production
3. **Memoization**: Use `React.memo`, `useMemo`, and `useCallback` for performance optimization
4. **Accessibility**: Always include ARIA labels and keyboard navigation
5. **Loading States**: Show loading indicators during async operations
6. **Error Handling**: Display user-friendly error messages
7. **Responsive Design**: Test components on multiple screen sizes
8. **Dark Mode**: Ensure all components support dark mode

---

## Testing Components

Example test structure for components:

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeForm from './EmployeeForm';

describe('EmployeeForm', () => {
  it('renders form fields', () => {
    render(
      <EmployeeForm
        departments={['Engineering']}
        onSubmit={jest.fn()}
        onCancel={jest.fn()}
      />
    );
    
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Role')).toBeInTheDocument();
  });

  it('calls onSubmit with form data', () => {
    const onSubmit = jest.fn();
    render(
      <EmployeeForm
        departments={['Engineering']}
        onSubmit={onSubmit}
        onCancel={jest.fn()}
      />
    );
    
    fireEvent.change(screen.getByLabelText('Full Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.submit(screen.getByRole('form'));
    
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'John Doe' })
    );
  });
});
```

---

## Additional Resources

- [React Documentation](https://react.dev)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

For styling guidelines and design system, see [style.md](./style.md).
For API endpoints and backend integration, see [README.md](./README.md).
