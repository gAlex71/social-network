import authOptions from "@/lib/next-auth.lib"; 

const handler  = authOptions;
export { handler as GET, handler as POST };