"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[2815],{42815:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("b-alert",{staticClass:"deprecation",attrs:{variant:t.variant,show:""}},[e("h3",[t._v(t._s(t.title))]),e("Description",{attrs:{description:t.message,inline:""}}),t.latestLink||t.successorLink||t.predecessorLink?e("ul",[t.latestLink?e("li",[t._v(" "+t._s(t.$t("deprecation.latestVersion"))+" "),e("StacLink",{attrs:{data:t.latestLink,fallbackTitle:t.$t("deprecation.fallbackTitle")}})],1):t._e(),t.successorLink?e("li",[t._v(" "+t._s(t.$t("deprecation.successorVersion"))+" "),e("StacLink",{attrs:{data:t.successorLink,fallbackTitle:t.$t("deprecation.fallbackTitle")}})],1):t._e(),t.predecessorLink?e("li",[t._v(" "+t._s(t.$t("deprecation.predecessorVersion"))+" "),e("StacLink",{attrs:{data:t.predecessorLink,fallbackTitle:t.$t("deprecation.fallbackTitle")}})],1):t._e()]):t._e()],1)},a=[],r=s(2778),n={name:"DeprecationNotice",components:{StacLink:()=>Promise.resolve().then(s.bind(s,85995)),Description:r["default"]},props:{data:{type:Object,default:null}},computed:{message(){let t={type:this.type};return this.isDeprecated?this.$t("deprecation.warning",t):this.$t("deprecation.otherVersionsNotice",t)},latestLink(){return this.data.getStacLinkWithRel("latest-version")},successorLink(){return this.data.getStacLinkWithRel("successor-version")},predecessorLink(){return!this.isDeprecated&&this.data.getStacLinkWithRel("predecessor-version")},variant(){return this.isDeprecated?"warning":"info"},isDeprecated(){return Boolean(this.data.isItem()?this.data.properties.deprecated:this.data.deprecated)},title(){return this.isDeprecated?this.$t("deprecated"):this.latestLink||this.successorLink?this.$t("deprecation.outdatedTitle"):this.$t("deprecation.otherVersionsTitle")},type(){return this.data.isItem()?this.$tc("stacItem"):this.data.isCollection()?this.$tc("stacCollection"):this.data.isCatalog()?this.$tc("stacCatalog"):""}}},c=n,o=s(1001),l=(0,o.Z)(c,i,a,!1,null,"5c644e7d",null),d=l.exports}}]);
//# sourceMappingURL=2815.279cf199.js.map