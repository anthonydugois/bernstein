import React, { Component } from "react"
import { Route } from "react-router"

import LayoutContainer from "../LayoutContainer"
import PhenomicPageContainer from "phenomic/lib/PageContainer"

import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"
import Homepage from "../layouts/Homepage"
import Post from "../layouts/Post"
import Documentation from "../layouts/Documentation"
import Playground from "../layouts/Playground"

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
          Homepage,
          Post,
          Documentation,
          Playground,
        } }
      />
    )
  }
}

export default (
  <Route component={ LayoutContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
