import SidebarRoutes from '@/components/sidebar-routes';
import Logo from './logo';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-white border-r shadow-sm">
      <div className="p-6 pl-8">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
