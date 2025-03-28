import { Column, Entity, Index } from "typeorm";

@Index("srt_cabut_sita_pkey", ["kdKantor", "kdKanwil", "noSrtCabutSita"], {
  unique: true,
})
@Index("g17_g15_fk", ["kdKantor", "kdKanwil", "noSpmp"], {})
@Entity("srt_cabut_sita", { schema: "public" })
export class SrtCabutSita {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_srt_cabut_sita", length: 30 })
  noSrtCabutSita!: string;

  @Column("character", { name: "no_spmp", length: 30 })
  noSpmp!: string;

  @Column("character varying", { name: "alasan_cabut_sita", length: 30 })
  alasanCabutSita!: string;

  @Column("timestamp without time zone", { name: "tgl_terbit_srt_cabut_sita" })
  tglTerbitSrtCabutSita!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_srt_cabut_sita",
    default: () => "statement_timestamp()",
  })
  tglCetakSrtCabutSita!: Date;

  @Column("character", { name: "nip_pencetak_srt_cabut_sita", length: 18 })
  nipPencetakSrtCabutSita!: string;
}
