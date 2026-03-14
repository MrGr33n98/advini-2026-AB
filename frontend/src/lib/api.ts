const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

export async function fetchHomeData() {
  try {
    const res = await fetch(`${API_URL}/home`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch home data");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchProducts() {
  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
