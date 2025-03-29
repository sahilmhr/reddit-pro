"use client";

import { Activity, Plus, Shield, Trash2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const accounts = [
  {
    id: 1,
    username: "tech_enthusiast",
    karma: 12500,
    posts: 156,
    comments: 892,
    status: "active",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    username: "code_master",
    karma: 8900,
    posts: 98,
    comments: 654,
    status: "active",
    lastActive: "5 hours ago",
  },
  {
    id: 3,
    username: "future_thinker",
    karma: 15600,
    posts: 234,
    comments: 1234,
    status: "inactive",
    lastActive: "2 days ago",
  },
];

export default function Accounts() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [karma, setKarma] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("/api/reddit/accounts");
        const data = await response.json();
        for (const account of data.accounts) {
          setKarma(karma + account.karma);
          setCount(count + 1);
        }
        setAccounts(data.accounts);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Reddit Accounts</h1>
        <Link
          href="/api/reddit/login"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Link>
      </div>

      {/* Account Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-500/10">
              <Activity className="h-6 w-6 text-red-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Total Karma</p>
              <p className="text-2xl font-semibold text-white">{karma}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-500/10">
              <Shield className="h-6 w-6 text-red-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">
                Active Accounts
              </p>
              <p className="text-2xl font-semibold text-white">{count}/3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accounts List */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-medium text-white">Connected Accounts</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {accounts.map((account) => (
            <div key={account.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-white">
                      {account.username}
                    </h3>
                    <span
                      className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
                        account.status === "active"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {account.status}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Karma</p>
                      <p className="text-sm font-medium text-white">
                        {account.karma.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Posts</p>
                      <p className="text-sm font-medium text-white">
                        {account.posts}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Comments</p>
                      <p className="text-sm font-medium text-white">
                        {account.comments}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Last active: {account.lastActive}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
