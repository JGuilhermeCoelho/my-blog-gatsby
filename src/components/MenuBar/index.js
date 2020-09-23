import React from "react"

import { HomeSmile as Home } from "@styled-icons/boxicons-solid/HomeSmile"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { ArrowUpCircle as Arrow } from "@styled-icons/bootstrap/ArrowUpCircle"
import { Lightbulb as Light } from "@styled-icons/fa-regular/Lightbulb"
import { Grid3x3 as Grid } from "@styled-icons/bootstrap/Grid3x3"

import * as S from "./styles"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
