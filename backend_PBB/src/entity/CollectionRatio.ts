import { Column, Entity, Index } from "typeorm";

@Index("collection_ratio_pkey", ["kdDati2", "kdPropinsi", "kdSektor", "thnPajakCr"], { unique: true })
@Index("p28_1_ak", ["kdDati2", "kdPropinsi", "kdSektor", "thnPajakCr"], {
  unique: true,
})
@Entity("collection_ratio", { schema: "public" })
export class CollectionRatio {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_pajak_cr", length: 4 })
  thnPajakCr!: string;

  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("numeric", {
    name: "collection_ratio",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  collectionRatio!: string | null;
}
