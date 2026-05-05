<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    
    <html>
      <head>
      <link rel="stylesheet" type="text/css" href="DAVID_MARTINEZ_estils.css" />
      </head>
      <body>
        <header>
          <h2><xsl:value-of select="canal/@títol"/></h2>
        </header>
        <h3>Nacional</h3>
        <table>
          <tr>
            <th><xsl:value-of select="name(canal/series/serie/nom)"/></th>
            <th><xsl:value-of select="name(canal/series/serie/capitol)"/></th>
            <th><xsl:value-of select="name(canal/series/serie/descripció)"/></th>
            <th><xsl:value-of select="name(canal/series/serie/imagen)"/></th>
          </tr>
          <xsl:for-each select="canal/series/serie[origen/@pais='Spain']">
            <xsl:sort select="nom" order="ascending" data-type="text"/>
            <tr>
              <td><xsl:value-of select="nom"/></td>
              <td><xsl:value-of select="count(capitol)"/></td>
              <td><xsl:value-of select="descripció"/></td>
              <td><img src="{imagen}"/></td>
            </tr>
          </xsl:for-each>
        </table>
        <h3>Internacional</h3>
        <table>
          <tr>
            <th><xsl:value-of select="name(canal/series/serie/nom)"/></th>
            <th><xsl:value-of select="name(canal/series/serie/capitol)"/></th>
            <th><xsl:value-of select="name(canal/series/serie/descripció)"/></th>
            <th><xsl:value-of select="name(canal/series/serie/imagen)"/></th>
          </tr>
          <xsl:for-each select="canal/series/serie[origen/@pais!='Spain']">
            <xsl:sort select="nom" order="ascending" data-type="text"/>
            <tr>
              <td><xsl:value-of select="nom"/></td>
              <td><xsl:value-of select="count(capitol)"/></td>
              <td><xsl:value-of select="descripció"/></td>
              <td><img src="{imagen}"/></td>
            </tr>
          </xsl:for-each>
        </table>
        
        <footer>
          <xsl:value-of select="canal/copyright"/>
        </footer>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>