<<<<<<< HEAD
import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
=======
import AdminCourses from "@/components/instructor-view/courses";
import AdminDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";

>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";

<<<<<<< HEAD
function InstructorDashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { resetCredentials } = useContext(AuthContext);
=======
function AdminDashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
<<<<<<< HEAD
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
=======
      component: <AdminDashboard />,
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
<<<<<<< HEAD
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  console.log(instructorCoursesList, "instructorCoursesList");

=======
      component: <AdminCourses listOfCourses={instructorCoursesList} />,
    },
  ];

>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Instructor View</h2>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2"
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
<<<<<<< HEAD
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
=======
                onClick={() => setActiveTab(menuItem.value)}
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
<<<<<<< HEAD
          {menuItems.map((menuItem) => (
           <TabsContent key={menuItem.value} value={menuItem.value}>
           {menuItem.component !== null ? menuItem.component : null}
           </TabsContent>
           ))}

          
=======
            {menuItems.map((menuItem) => (
              <TabsContent key={menuItem.value} value={menuItem.value}>
                {menuItem.component !== null ? menuItem.component : null}
              </TabsContent>
            ))}
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
          </Tabs>
        </div>
      </main>
    </div>
  );
}

<<<<<<< HEAD
export default InstructorDashboardpage;
=======
export default AdminDashboardpage;
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
