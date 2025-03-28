import { Column, Entity, Index } from "typeorm";

@Index("bangunan_lantai_pkey", ["kdBngLantai", "kdJpb", "tipeBng"], {
  unique: true,
})
@Entity("bangunan_lantai", { schema: "public" })
export class BangunanLantai {
  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character", { primary: true, name: "kd_bng_lantai", length: 8 })
  kdBngLantai!: string;

  @Column("smallint", { name: "lantai_min_bng_lantai" })
  lantaiMinBngLantai!: number;

  @Column("smallint", { name: "lantai_max_bng_lantai" })
  lantaiMaxBngLantai!: number;
}
