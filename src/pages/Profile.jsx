import React from "react";

function Profile() {
  const user = {
    name: "Laila Qadriyah",
    email: "laila@example.com",
    bio: "Mahasiswa SI yang suka belajar web development.",
    photo: "/src/img/profile.jpg",
    courses: [
      { id: 1, title: "Kursus Pemrograman Web", progress: 80 },
      { id: 2, title: "Kursus Data Science", progress: 45 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Header Profile */}
        <div className="flex items-center space-x-6">
          <img
            src={user.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-700 mt-2">{user.bio}</p>
          </div>
          <div className="ml-auto">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Edit Profil
            </button>
          </div>
        </div>

        {/* Kursus */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Kursus Saya</h2>
          <div className="space-y-4">
            {user.courses.map((course) => (
              <div
                key={course.id}
                className="p-4 bg-gray-50 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600">
                    Progress: {course.progress}%
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">
                  Lanjutkan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
