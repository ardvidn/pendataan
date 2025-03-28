import { Column, Entity, Index } from "typeorm";

@Index("ttr_srt_tegoran_pkey", ["kdKantor", "kdKanwil", "noSrtTegoran"], {
  unique: true,
})
@Entity("ttr_srt_tegoran", { schema: "public" })
export class TtrSrtTegoran {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_srt_tegoran", length: 30 })
  noSrtTegoran!: string;

  @Column("timestamp without time zone", { name: "tgl_terima_wp_srt_tegoran" })
  tglTerimaWpSrtTegoran!: Date;

  @Column("character varying", {
    name: "nm_yg_menerima_srt_tegoran",
    nullable: true,
    length: 30,
  })
  nmYgMenerimaSrtTegoran!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_ttr_srt_tegoran",
    default: () => "statement_timestamp()",
  })
  tglRekamTtrSrtTegoran!: Date;

  @Column("character", { name: "nip_rekam_ttr_srt_tegoran", length: 18 })
  nipRekamTtrSrtTegoran!: string;
}
