import { Bell, Lock, Globe, CreditCard, User } from "lucide-react";

const settings = [
  {
    name: "Profile Settings",
    description: "Manage your account information and preferences",
    icon: User,
    href: "#profile",
  },
  {
    name: "Notifications",
    description: "Configure your notification preferences",
    icon: Bell,
    href: "#notifications",
  },
  {
    name: "Security",
    description: "Manage your security settings and 2FA",
    icon: Lock,
    href: "#security",
  },
  {
    name: "Billing",
    description: "Manage your subscription and payment methods",
    icon: CreditCard,
    href: "#billing",
  },
  {
    name: "Language & Region",
    description: "Set your preferred language and region",
    icon: Globe,
    href: "#language",
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          Save Changes
        </button>
      </div>

      {/* Profile Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">John Doe</h2>
            <p className="text-sm text-gray-400">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {settings.map((setting) => (
          <div
            key={setting.name}
            className="bg-gray-800 rounded-lg border border-gray-700 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-red-500/10">
                  <setting.icon className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {setting.name}
                  </h3>
                  <p className="text-sm text-gray-400">{setting.description}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <div className="bg-gray-800 rounded-lg border border-red-500/20 p-6">
        <h2 className="text-lg font-medium text-red-500 mb-4">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white">Delete Account</h3>
              <p className="text-sm text-gray-400">
                Permanently delete your account and all associated data
              </p>
            </div>
            <button className="px-4 py-2 bg-red-500/10 text-red-500 rounded-md hover:bg-red-500/20 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
