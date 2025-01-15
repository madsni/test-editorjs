# EditorJS Strapi Plugin

## Good reads for the complications this plugin has faced:

Reason why its here, and not in the RB repo:  
(useStrapiApp)  
https://github.com/strapi/strapi/issues/22162

---

There has been an update for how plugins should fetch in strapi - it currently works without, but we should keep an eye on it:  
@AVM: I think the new pattern for authorized requests are:  
https://gitlab.peytz.dk/flex/red-barnet-dannelse/-/blob/main/cms/src/plugins/multi-domain/admin/src/api/permissions.ts#L6
