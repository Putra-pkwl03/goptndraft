export async function loginStudent(payload: { email: string; password: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/student/login`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("Response is not valid JSON");
  }

  if (!res.ok) {
    throw new Error(data.message || "Login gagal");
  }

  return data;
}
