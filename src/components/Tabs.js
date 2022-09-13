import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    Devlopment: [
      {
        id: 1,
        title: "React Devloper",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "JavaScript Devloper",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Design: [
      {
        id: 1,
        title: "UX/UI Designer",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Graphic Designer",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Marketing: [
      {
        id: 3,
        title: "Facebook Ads Specialest",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 4,
        title: "Marketting Strategies",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Translation: [
      {
        id: 1,
        title: "Accountant",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 5,
        title: "Business Planer",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    HR: [
      {
        id: 6,
        title: "Technology Freelancers/Online Freelancers",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "Human Resource Managers",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Finance: [
      {
        id: 7,
        title: "Startup Consultants",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "Financial Analysts",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Legal: [
      {
        id: 8,
        title: "Legal Consultants",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "Legal Researchers",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Engineering: [
      {
        id: 9,
        title: "3D Designs",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 10,
        title: "Interior Designers",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="max-w-max px-3  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-20 rounded-xl bg-blue-900 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-amber-500",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-400 ",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-amber-400 hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-amber-400 p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 "
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="/addskills"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 "
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
