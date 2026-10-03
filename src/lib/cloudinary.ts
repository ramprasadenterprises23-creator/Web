const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export function cld(id: string, width = 1200) {
  // local paths and full URLs pass through unchanged
  if (id.startsWith('/') || id.startsWith('http')) return id;
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},c_limit/${id}`;
}