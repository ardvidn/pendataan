import { Column, Entity, Index } from "typeorm";

@Index("c19_1_ak", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "lbrBentMaxHrgJpb8", "lbrBentMinHrgJpb8", "thnHrgPekerjaanJpb8", "tingKolomMaxHrgJpb8", "tingKolomMinHrgJpb8"], { unique: true })
@Index("hrg_kegiatan_jpb8_pkey", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "lbrBentMaxHrgJpb8", "lbrBentMinHrgJpb8", "thnHrgPekerjaanJpb8", "tingKolomMaxHrgJpb8", "tingKolomMinHrgJpb8"], { unique: true })
@Entity("hrg_kegiatan_jpb8", { schema: "public" })
export class HrgKegiatanJpb8 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "thn_hrg_pekerjaan_jpb8",
    length: 4,
  })
  thnHrgPekerjaanJpb8!: string;

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

  @Column("numeric", { name: "hrg_kegiatan_jpb8", precision: 11, scale: 4 })
  hrgKegiatanJpb8!: string;
}
