;/*FB_PKG_DELIM*/

__d("PolarisSidebarSectionHeader.react",["PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",direction:"row",paddingX:4,paddingY:1,children:[h.jsx(c("PolarisIGCoreBox"),{flex:"grow",children:h.jsx(c("PolarisIGCoreText").BodyEmphasized,{color:"ig-secondary-text",children:a.headerText})}),a.linkTo&&Boolean(a.secondaryText)&&a.placeholder===!0&&h.jsx(c("PolarisIGCoreText").Body2,{color:"ig-secondary-text",children:a.secondaryText}),a.linkTo&&Boolean(a.secondaryText)&&a.placeholder!==!0&&h.jsx(c("PolarisIGCoreButton"),{borderless:!0,color:"ig-secondary-button",disabled:!!a.placeholder,href:a.linkTo,onClick:a.onClick,children:h.jsx(c("PolarisIGCoreText").Body2Emphasized,{children:a.secondaryText})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFeedSidebarSuggestedUserList.react",["cx","PolarisConnectionsLogger","PolarisFetchingSuggestedUserList.react","PolarisIGCoreBox","PolarisPanavisionQEHelpers","PolarisRoutes","PolarisSidebarSectionHeader.react","PolarisSuggestedUserList.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState,l=5;function a(a){a=a.hasHeaderPlaceholder;var b=d("PolarisPanavisionQEHelpers").hasFamiliarFeed(),e=k(!0),f=e[0],g=e[1];e=j(function(){g(!1)},[]);return!f?null:i.jsxs("div",{className:"_aak3"+(b?" _agh4":""),children:[i.jsx(c("PolarisSidebarSectionHeader.react"),{headerText:d("PolarisSuggestedUserList.react").HEADER_TEXT,linkTo:d("PolarisRoutes").DISCOVER_PEOPLE_PATH,placeholder:a,secondaryText:d("PolarisSuggestedUserList.react").SEE_ALL_TEXT}),i.jsx(c("PolarisIGCoreBox"),{marginBottom:1,marginStart:1,children:i.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:"desktop",avatarSize:"small",backgroundColor:b?"ig-primary-background":"ig-secondary-background",borderlessFollowButton:!0,count:l,footer:null,header:null,hideName:!0,hideUpsells:!0,initialRenderCount:l,onLoadFailed:e,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.desktop_feed})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSidebarUserSummary.react",["cx","FastLink","PolarisAuthStrings","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreConstants","PolarisIGCoreListItem","PolarisIGCoreText","PolarisIGCoreVerifiedBadge","PolarisLinkBuilder","PolarisNavigationActions","PolarisPanavisionQEHelpers","PolarisQEHelper","PolarisReactRedux","PolarisRoutes","PolarisUserAvatarWithStories.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(){var a=d("PolarisReactRedux").useDispatch();if(!d("PolarisQEHelper").hasAccountSwitching())return null;var b=function(){return a(d("PolarisNavigationActions").openAccountSwitcher({next:d("PolarisRoutes").FEED_PATH,source:"feed_sidebar"}))};return i.jsx(c("PolarisIGCoreButton"),{borderless:!0,onClick:b,children:i.jsx(c("PolarisIGCoreText").Body2,{color:"ig-primary-action",weight:"semibold",children:d("PolarisAuthStrings").SWITCH_CTA_TEXT})})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=a.isVerified,e=a.name,f=a.profilePictureUrl;a=a.username;var g=d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp(),h=g?"medium":"large";return i.jsx(c("PolarisIGCoreBox"),{"data-testid":void 0,marginEnd:1,width:"100%",children:i.jsx(c("PolarisIGCoreListItem"),{action:i.jsx(j,{}),icon:i.jsx(c("PolarisUserAvatarWithStories.react"),{className:g?"":"_aak0",isLink:!0,profilePictureUrl:f,size:c("PolarisIGCoreConstants").AVATAR_SIZES[h],storyEntrypoint:"reel_feed_timeline",username:a}),paddingX:0,paddingY:0,subtitle:e!==""?i.jsx(c("PolarisIGCoreBox"),{flex:"grow",marginStart:g?0:3,children:i.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",display:"truncated",children:e})}):null,title:i.jsxs(c("PolarisIGCoreBox"),{direction:"row",flex:"grow",marginStart:g?0:3,children:[i.jsx(c("FastLink"),{className:"_aak1",href:d("PolarisLinkBuilder").buildUserLink(a),children:a}),b&&i.jsx(c("PolarisIGCoreBox"),{display:"inlineBlock",marginStart:1,children:i.jsx(c("PolarisIGCoreVerifiedBadge"),{})})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFeedSidebar.react",["cx","PolarisBatchDOM","PolarisDOMListener.react","PolarisErrorBoundaryWithHoldout.react","PolarisFeedSidebarSuggestedUserList.react","PolarisFooter.react","PolarisReactRedux","PolarisSidebarUserSummary.react","nullthrows","polarisStorySelectors","polarisUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useRef,m=b.useState;function a(){var a=d("PolarisReactRedux").useSelector(d("polarisUserSelectors").getViewer),b=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getFeedStoryTrayWithoutOwn),e=m(null),f=e[0],g=e[1],h=l(null),n=j(function(){d("PolarisBatchDOM").measure(function(){if(h.current==null)return;var a=h.current.getBoundingClientRect().left;d("PolarisBatchDOM").mutate(function(){if(h.current==null)return;g(a)})})},[h]);k(function(){n()},[n]);return i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisDOMListener.react"),{event:"scroll",handler:n,passive:!0,target:window}),i.jsx(c("PolarisDOMListener.react"),{event:"resize",handler:n,passive:!0,target:window}),i.jsx("div",{className:"_aak4",ref:h}),i.jsxs("div",{className:"_aak6"+(f!=null?" _aak9":""),style:{left:f},children:[i.jsx("div",{className:"_aakb _aakc",children:i.jsx(c("PolarisSidebarUserSummary.react"),{isVerified:!1,name:c("nullthrows")(a==null?void 0:a.fullName),profilePictureUrl:c("nullthrows")(a==null?void 0:a.profilePictureUrl),username:c("nullthrows")(a==null?void 0:a.username)})}),i.jsx(c("PolarisErrorBoundaryWithHoldout.react"),{children:i.jsx(c("PolarisFeedSidebarSuggestedUserList.react"),{hasHeaderPlaceholder:b==null})}),i.jsx(c("PolarisFooter.react"),{variant:c("PolarisFooter.react").VARIANTS.sidebar})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);