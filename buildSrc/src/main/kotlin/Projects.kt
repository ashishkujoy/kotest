object Projects {
   const val Common = ":kotest-common"
   const val Api = ":kotest-framework:kotest-framework-api"
   const val Engine = ":kotest-framework:kotest-framework-engine"
   const val Discovery = ":kotest-framework:kotest-framework-discovery"
   const val AssertionsApi = ":kotest-assertions:kotest-assertions-api"
   const val AssertionsCore = ":kotest-assertions:kotest-assertions-core"
   const val AssertionsKtor = ":kotest-assertions:kotest-assertions-ktor"
   const val AssertionsArrow = ":kotest-assertions:kotest-assertions-arrow"
   const val AssertionsShared = ":kotest-assertions:kotest-assertions-shared"
   const val Extensions = ":kotest-extensions"
   const val MockServer = ":kotest-extensions:kotest-extensions-mockserver"
   const val Allure = ":kotest-extensions:kotest-extensions-allure"
   const val JunitXmlExtension = ":kotest-extensions:kotest-extensions-junitxml"
   const val JunitRunner = ":kotest-runner:kotest-runner-junit5"
   const val Property = ":kotest-property"

   fun extension(name: String) = ":kotest-extensions:kotest-extensions-$name"
}
