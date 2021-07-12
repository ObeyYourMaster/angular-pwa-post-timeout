package org.example

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

data class Dummy(val hello: String)

@RestController
class DummyController {
    @PostMapping("/dummy")
    fun getDummy(): Dummy {
        Thread.sleep(5000)
        return Dummy("Hello World!")
    }
}
