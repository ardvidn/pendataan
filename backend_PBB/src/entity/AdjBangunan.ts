import { Column, Entity, Index } from "typeorm";

@Index("adj_bangunan_pkey", ["kdAdj", "kdBngLantai", "kdJpb", "tipeBng"], {
  unique: true,
})
@Index("c13_c2_fk", ["kdBngLantai", "kdJpb", "tipeBng"], {})
@Entity("adj_bangunan", { schema: "public" })
export class AdjBangunan {
  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character", { primary: true, name: "kd_bng_lantai", length: 8 })
  kdBngLantai!: string;

  @Column("character", { primary: true, name: "kd_adj", length: 2 })
  kdAdj!: string;

  @Column("numeric", { name: "pct_adj_bng", precision: 5, scale: 2 })
  pctAdjBng!: string;
}
