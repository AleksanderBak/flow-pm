/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57mek2zcba0q94m")

  collection.name = "projects"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57mek2zcba0q94m")

  collection.name = "Project"

  return dao.saveCollection(collection)
})
