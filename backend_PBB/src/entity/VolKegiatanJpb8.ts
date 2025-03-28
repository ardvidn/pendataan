import { Column, Entity, Index } from "typeorm";

@Index("vol_kegiatan_jpb8_pkey", ["kdKegiatan", "kdPekerjaan", "lbrBentMaxHrgJpb8", "lbrBentMinHrgJpb8", "tingKolomMaxHrgJpb8", "tingKolomMinHrgJpb8"], { unique: true })
@Entity("vol_kegiatan_jpb8", { schema: "public" })
export class VolKegiatanJpb8 {
  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("smallint", { primary: true, name: "lbr_bent_min_hrg_jpb8" })
  lbrBentMinHrgJpb8!: number;

  @Column("smallint", { primary: true, name: "lbr_bent_max_hrg_jpb8" })
  lbrBentMaxHrgJpb8!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_min_hrg_jpb8" })
  tingKolomMinHrgJpb8!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_max_hrg_jpb8" })
  tingKolomMaxHrgJpb8!: number;

  @Column("numeric", { name: "vol_kegiatan_jpb8", precision: 10, scale: 4 })
  volKegiatanJpb8!: string;
}
