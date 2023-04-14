<script setup lang="ts">
import refLinks from "@/data/data.json";
import { useThemeTWStore } from "../store/themeTWStore";
const theme = useThemeTWStore();

const aTWLength = theme.getTextColorTWLength;
</script>

<template>
  <section class="text-gray-800 lg:text-left">
    <div class="p-5">
      <h1 :class="theme.getHTW + ' text-3xl'">Datenschutz & Impressum</h1>
      <div class="pb-5 text-center">
        <p :class="theme.getTextGrayTW">
          Diese Seite bietet keine Dienstleistungen an und dient ausschließlich
          als Informationsportal über meine Person und meine beruflichen
          Erfahrungen und Interessen. Diese Seite wurde mit den Technologien
          erstellt, für die ich mich aktuell interessiere. Die
          Kommunikationskanäle zur Kontaktaufnahme mit mir sind auf der
          Hauptseite angegeben.
        </p>
      </div>
      <h2 :class="theme.getHTW + ' text-2xl'">Urheberrecht</h2>
      <div class="pb-5 text-center">
        <p :class="theme.getTextGrayTW">
          Verwendete Bilder von Naturlandschaften sind selbst fotografierte
          Bilder. Das Logo meiner Seite wurde selbst erstellt und darf weder
          kopiert noch andersweitig verwendet werden.
        </p>
      </div>
      <h2 :class="theme.getHTW + ' text-2xl'">Quellenangaben</h2>
      <div class="p-5 text-center">
        <div :class="theme.getTextGrayTW">
          Icons:
          <appLink
            :to="refLinks.impressumHints[1].url"
            title="Quelle verwendeter Icons"
            >{{ refLinks.impressumHints[1].linkText }}</appLink
          >
        </div>
        <div>
          <span :class="theme.getHTW">Weitere genutzte Packages:</span>
          <ul :class="theme.getTextGrayTW">
            <li
              v-for="impressumLink in refLinks.impressumSources"
              :key="impressumLink.id"
            >
              <appLink
                :to="impressumLink.url"
                :class="
                  theme.getTextColorTW(
                    Math.floor(Math.random() * Math.floor(aTWLength))
                  )
                "
                :title="impressumLink.url"
                >{{ impressumLink.url }}</appLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p :class="theme.getTextGrayTW">
          Dieser Dienst verwendet keine benutzerbezogenen oder persönlichen
          Daten und keine Session-Cookies. Alle Aktionen dieser Seite laufen im
          Browser des Nutzers ab. Wenn die verknüpften Links zu weiterführenden
          Informationen zu den angegebenen Themen genutzt werden, wird keine
          Verantwortung von erfassten Daten dieser Dienste übernommen. Für den
          Inhalt, die Datenschutzbestimmungen der verlinkten Seiten sind
          ausschließlich deren Betreiber verantwortlich.<br />
          Diese Seite wird bei
          <appLink
            :to="refLinks.impressumHints[0].url"
            :class="
              theme.getTextColorTW(
                Math.floor(Math.random() * Math.floor(aTWLength))
              )
            "
            :title="refLinks.impressumHints[0].linkText"
            >{{ refLinks.impressumHints[0].linkText }}</appLink
          >
          gehosted. Der Websitebetreiber behält sich vor, aus Sicherheitsgründen
          Seitenzugriffe zu protokollieren und diese in Log-Dateien zu
          speichern. In diesen Log-Dateien können vom Server ausgelesene
          Informationen wie IP-Adresse, Zeitpunkt des Besuches oder der
          "User-Agent" des genutzten Browsers sein. Weitere Informationen
          erfahren Sie vom web-Hoster selbst.
        </p>
      </div>
      <h2 :class="theme.getHTW + ' p-5 text-2xl'">Zustimmung</h2>
      <div :class="theme.getTextGrayTW">
        Wenn Sie nicht möchten, dass Cookies auf Ihrem Gerät abgelegt werden,
        sollten Sie diese blockieren, löschen oder die Website verlassen.
      </div>
    </div>
  </section>
</template>
