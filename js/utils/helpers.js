export function updateMissingState(data) {
   if (!data.location) {
      data.location = "Not Given";
   }
   if (!data.company) {
      data.company = "Not Given";
   }
   if (!data.blog || data.blog === "") {
      data.blog = "Not Given";
   }

   return data;
}

export function updateCreatedTime(time) {
   return new Date(time);
}
